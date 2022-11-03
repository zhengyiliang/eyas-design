
import Group from './group';
import ForwardRefButton from './button'
import type { ButtonProps } from './interface'
import './style/index.ts'

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __BYTE_BUTTON: boolean;
  Group: typeof Group;
};

ButtonComponent.__BYTE_BUTTON = true;

ButtonComponent.Group = Group;

ButtonComponent.displayName = 'Button';

export default ButtonComponent;

export { ButtonProps };
