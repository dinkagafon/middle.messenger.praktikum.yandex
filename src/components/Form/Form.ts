import Block from '../../utils/Block';
import Button from '../Button';
import Input from '../Input';

class Form<Fields> extends Block {
  constructor(props: {
    fields: Array<{
      placeholder: string,
      name: string,
      validFunc?: (v: string) => boolean,
      type: string,
    }>,
    buttonText: string,
    valid?: boolean,
    error?: string,
    submit: (formObj: Fields) => void,
  }) {
    const fieldsArray: Array<Input> = props.fields
      .map((f) => new Input({
        events: {
          blur: (_e, comp: Input) => {
            this.checkInput(comp);
          },
          focus: (_e, comp: Input) => {
            if (!f.validFunc) {
              return;
            }
            comp.setProps({
              wrong: false,
            });
          },
        },
        validFunc: f.validFunc,
        placeholder: f.placeholder,
        name: f.name,
        type: f.type,
      }));
    super('div', {}, {
      fields: fieldsArray,
      button: new Button({
        content: props.buttonText,
        fullWidth: true,
        onclick: () => {
          const result = this.getFormValues();
          if (!props.valid) {
            props.submit(result);
            return;
          }
          const status = this.checkValidFields();
          if (status) {
            props.submit(result);
          }
        },
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  checkInput(input: Input) {
    if (!input.props.validFunc) {
      return;
    }
    const element = input.element as HTMLTextAreaElement;
    const result: boolean = input.props.validFunc(element.value);
    if (!result) {
      input.setProps({
        wrong: true,
      });
    }
  }

  checkValidFields() {
    let statusFields = true;
    this.props.fields.forEach((field: Input) => {
      this.checkInput(field);
      if (field.props.wrong === true) {
        statusFields = false;
      }
    });
    return statusFields;
  }

  getFormValues() {
    const result = this.props.fields.reduce((sum: Record<string, string>, cur: Input) => {
      const inputName: string = cur.attrs.name;
      const input = cur.element as HTMLInputElement;
      const newSum = {
        ...sum,
        [inputName]: input.value,
      };
      return newSum;
    }, {});
    return result;
  }
}

export default Form;
