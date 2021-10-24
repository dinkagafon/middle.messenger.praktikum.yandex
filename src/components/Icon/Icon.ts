import Block from '../../utils/Block';

class Icon extends Block {
  constructor(props: {
    name: 'plus-square' | 'sliders' | 'trash-2',
  }) {
    super('div', {}, {
      name: props.name,
    });
  }

  setClass() {
    const baseClass = `icon icon_name_${this.props.name}`;
    this.attrs.class = baseClass;
  }

  render() {
    this.setClass();
    return '';
  }
}

export default Icon;
