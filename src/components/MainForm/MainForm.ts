import Form from '../Form';
import mainForm from './mainForm.pug';

class MainForm<Fields> extends Form<Fields> {
  constructor(props: {
    fields: Array<{
      placeholder: string,
      name: string,
      validFunc?: (v: string) => boolean,
      type: string,
    }>,
    buttonText: string,
    valid?: boolean
    submit: (formObj: Fields) => void,
  }) {
    super({
      fields: props.fields,
      buttonText: props.buttonText,
      valid: props.valid,
      submit: props.submit,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return mainForm({
      button: this.props.button,
      fields: this.props.fields,
    });
  }
}

export default MainForm;
