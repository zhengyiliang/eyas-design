import React, { ReactNode, ReactElement, forwardRef, useContext } from 'react';
import EaysButton from '../button';
import Dropdown from './index';
import { IconMore } from '@eyas-design/icons';
import type { DropdownButtonProps } from './interface';
import { ConfigContext } from '../config-provider';
import useMergeProps from '../_util/hooks/useMergeProps';
import { pickDataAttributes } from '../_util/pick';

const defaultProps: DropdownButtonProps = {
  position: 'br',
  trigger: 'hover',
  type: 'default',
  icon: <IconMore />,
  unmountOnExit: true,
};

function Button(baseProps: DropdownButtonProps, ref) {
  const { componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<DropdownButtonProps>(
    baseProps,
    defaultProps,
    componentConfig?.['Dropdown.Button'],
  );
  const {
    className,
    style,
    children,
    disabled,
    droplist,
    position = 'br',
    trigger = 'hover',
    type = 'default',
    size,
    icon = <IconMore />,
    unmountOnExit = true,
    onClick,
    onVisibleChange,
    buttonProps,
    buttonsRender,
  } = props;

  let leftButton: ReactNode = (
    <EaysButton disabled={disabled} type={type} size={size} onClick={onClick} {...buttonProps}>
      {children}
    </EaysButton>
  );
  let rightButton: ReactNode = (
    <EaysButton disabled={disabled} type={type} size={size} icon={icon} />
  );

  if (buttonsRender) {
    [leftButton, rightButton] = buttonsRender([leftButton, rightButton]);
  }

  const disableTrigger =
    disabled ||
    !rightButton ||
    ((rightButton as ReactElement).props && (rightButton as ReactElement).props.loading);

  return (
    <EaysButton.Group className={className} style={style} ref={ref} {...pickDataAttributes(props)}>
      {leftButton}
      <Dropdown
        disabled={disabled}
        droplist={droplist}
        position={position}
        trigger={trigger}
        unmountOnExit={unmountOnExit}
        onVisibleChange={onVisibleChange}
        triggerProps={{
          disabled: disableTrigger,
        }}
      >
        {rightButton}
      </Dropdown>
    </EaysButton.Group>
  );
}

const ButtonComponent = forwardRef(Button);

ButtonComponent.displayName = 'DropdownButton';

export default ButtonComponent;

export { DropdownButtonProps };
