import Block from '../../block/Block';
import Button from '../../block/Button';
import form from '../../blocks/form/form.pug';
import Input from '../Input/Input';

class Form extends Block {
  constructor(props: {
    fields: Array<{
      placeholder: string,
      name: string,
      validFunc?: (v: string) => boolean
    }>,
    buttonText: string,
    valid: boolean
    submit: (formObj: Record<string, string>) => void,
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
      }));
    super('div', {
      class: 'form',
    }, {
      fields: fieldsArray,
      button: new Button({
        text: props.buttonText,
        fullWidth: true,
        events: {
          click: () => {
            const result = this.getFormValues();
            if (!props.valid) {
              props.submit(result);
            }
            const status = this.checkValidFields();
            if (status) {
              props.submit(result);
            }
          },
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

  render() {
    return form({
      titleText: this.props.titleText,
      button: this.props.button,
      fields: this.props.fields,
    });
  }
}

export default Form;
