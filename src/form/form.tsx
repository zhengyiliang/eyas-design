import React, {
  useImperativeHandle,
  useEffect,
  forwardRef,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react';
import scrollIntoView, { Options as ScrollIntoViewOptions } from 'scroll-into-view-if-needed';
import merge from 'lodash/merge';
import cs from '../_util/classNames';
import useForm from './useForm';
import type { FormProps, FormInstance, FieldError, KeyType } from './interface';
import ConfigProvider, { ConfigContext } from '../config-provider';
import {
  FormContext as RawFormContext,
  FormContextType as RawFormContextType,
  FormProviderContext,
} from './context';
import { isObject } from '../_util/is';
import omit from '../_util/omit';
import useMergeProps from '../_util/hooks/useMergeProps';
import { ID_SUFFIX } from './utils';

const defaultValidateMessages = {
  required: '#{field} 是必填项',
  type: {
    string: '#{field} 不是合法的文本类型',
    number: '#{field} 不是合法的数字类型',
    boolean: '#{field} 不是合法的布尔类型',
    array: '#{field} 不是合法的数组类型',
    object: '#{field} 不是合法的对象类型',
    url: '#{field} 不是合法的 url 地址',
    email: '#{field} 不是合法的邮箱地址',
    ip: '#{field} 不是合法的 IP 地址',
  },
  number: {
    min: '`#{value}` 小于最小值 `#{min}`',
    max: '`#{value}` 大于最大值 `#{max}`',
    equal: '`#{value}` 不等于 `#{equal}`',
    range: '`#{value}` 不在 `#{min} ~ #{max}` 范围内',
    positive: '`#{value}` 不是正数',
    negative: '`#{value}` 不是负数',
  },
  array: {
    length: '`#{field}` 个数不等于 #{length}',
    minLength: '`#{field}` 个数最少为 #{minLength}',
    maxLength: '`#{field}` 个数最多为 #{maxLength}',
    includes: '#{field} 不包含 #{includes}',
    deepEqual: '#{field} 不等于 #{deepEqual}',
    empty: '`#{field}` 不是空数组',
  },
  string: {
    minLength: '字符数最少为 #{minLength}',
    maxLength: '字符数最多为 #{maxLength}',
    length: '字符数必须是 #{length}',
    match: '`#{value}` 不符合模式 #{pattern}',
    uppercase: '`#{value}` 必须全大写',
    lowercase: '`#{value}` 必须全小写',
  },
  object: {
    deepEqual: '`#{field}` 不等于期望值',
    hasKeys: '`#{field}` 不包含必须字段',
    empty: '`#{field}` 不是对象',
  },
  boolean: {
    true: '期望是 `true`',
    false: '期望是 `false`',
  },
};

function getFormElementId<FieldKey extends KeyType = string>(
  prefix: string | undefined,
  field: FieldKey,
): string {
  const id = (field as string).replace(/[\[\.]/g, '_').replace(/\]/g, '');
  return prefix ? `${prefix}-${id}` : `${id}`;
}

const defaultProps = {
  layout: 'horizontal' as const,
  labelCol: { span: 5, offset: 0 },
  labelAlign: 'right' as const,
  wrapperCol: { span: 19, offset: 0 },
  requiredSymbol: true,
  wrapper: 'form' as FormProps['wrapper'],
  validateTrigger: 'onChange',
};

const Form = <
  FormData extends unknown = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(
  baseProps: PropsWithChildren<FormProps<FormData, FieldValue, FieldKey>>,
  ref: React.Ref<FormInstance<FormData, FieldValue, FieldKey>>,
) => {
  const ctx = useContext(ConfigContext);
  const formProviderCtx = useContext(FormProviderContext);
  const wrapperRef = useRef<HTMLElement>(null);
  const [formInstance] = useForm<FormData, FieldValue, FieldKey>(baseProps.form);
  const isMount = useRef<boolean>();

  const props = useMergeProps<FormProps>(baseProps, defaultProps, {});

  const {
    layout,
    labelCol,
    wrapperCol,
    wrapper: Wrapper,
    id,
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    className,
    validateTrigger,
    prefixCls: formPrefixCls,
    validateMessages,
    ...rest
  } = props;
  const prefixCls = formPrefixCls || ctx.getPrefixCls('form');
  const rtl = ctx.rtl;
  const size = 'size' in props ? props.size : ctx.size;
  const innerMethods = formInstance.getInnerMethods(true);
  if (!isMount.current) {
    innerMethods.innerSetInitialValues(props.initialValues);
  }
  useEffect(() => {
    isMount.current = true;
  }, []);

  useEffect(() => {
    let unregister;
    if (formProviderCtx.register) {
      unregister = formProviderCtx.register(props.id, formInstance);
    }
    return unregister;
  }, [props.id, formInstance]);

  useImperativeHandle(ref, () => {
    return formInstance;
  });

  // 滚动到目标表单字段位置
  formInstance.scrollToField = (field: FieldKey, options?: ScrollIntoViewOptions) => {
    const node = wrapperRef.current;
    const id = props.id;
    if (!node) {
      return;
    }
    let fieldNode = node.querySelector(`#${getFormElementId(id, field as string)}`);
    if (!fieldNode) {
      // 如果设置了nostyle， fieldNode不存在，尝试直接查询表单控件
      fieldNode = node.querySelector(`#${getFormElementId(id, field as string)}${ID_SUFFIX}`);
    }
    fieldNode &&
      scrollIntoView(fieldNode, {
        behavior: 'smooth',
        block: 'nearest',
        scrollMode: 'if-needed',
        ...options,
      });
  };

  innerMethods.innerSetCallbacks({
    onValuesChange: (value, values) => {
      props.onValuesChange && props.onValuesChange(value, values);
      formProviderCtx.onFormValuesChange && formProviderCtx.onFormValuesChange(props.id, value);
    },
    onChange: props.onChange,
    onValidateFail: (errors: { [key in FieldKey]: FieldError<FieldValue> }) => {
      if (props.scrollToFirstError) {
        const options = isObject(props.scrollToFirstError) ? props.scrollToFirstError : {};
        formInstance.scrollToField((Object.keys(errors) as FieldKey[])[0], options);
      }
    },
    onSubmitFailed: props.onSubmitFailed,
    onSubmit: (values) => {
      props.onSubmit && props.onSubmit(values);
      formProviderCtx.onFormSubmit && formProviderCtx.onFormSubmit(props.id, values);
    },
  });

  const contextProps = {
    requiredSymbol,
    labelAlign,
    disabled,
    colon,
    labelCol,
    wrapperCol,
    layout,
    store: formInstance,
    prefixCls,
    validateTrigger,
    validateMessages: merge({}, defaultValidateMessages, validateMessages),
    getFormElementId: (field: FieldKey) => getFormElementId(id, field),
  };

  const FormContext = RawFormContext as unknown as RawFormContextType<
    FormData,
    FieldValue,
    FieldKey
  >;

  return (
    <ConfigProvider {...ctx} size={size}>
      <FormContext.Provider value={contextProps}>
        <Wrapper
          ref={wrapperRef}
          {...omit(rest, [
            'form',
            'size',
            'initialValues',
            'onValuesChange',
            'onChange',
            'wrapperProps',
            'scrollToFirstError',
            'onSubmit',
            'onSubmitFailed',
          ])}
          {...props.wrapperProps}
          className={cs(
            prefixCls,
            `${prefixCls}-${layout}`,
            `${prefixCls}-size-${size}`,
            { [`${prefixCls}-rtl`]: rtl },
            className,
          )}
          style={props.style}
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            formInstance.submit();
          }}
          id={id}
        >
          {props.children}
        </Wrapper>
      </FormContext.Provider>
    </ConfigProvider>
  );
};

const FormComponent = forwardRef(Form);

FormComponent.displayName = 'Form';

export default FormComponent as <
  FormData = any,
  FieldValue = FormData[keyof FormData],
  FieldKey extends KeyType = keyof FormData,
>(
  props: React.PropsWithChildren<FormProps<FormData, FieldValue, FieldKey>> & {
    ref?: React.Ref<FormInstance<FormData, FieldValue, FieldKey>>;
  },
) => React.ReactElement;
