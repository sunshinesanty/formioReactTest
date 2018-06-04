import TextFieldComponent from 'formiojs/components/textfield/TextField';

export class FieldCustomText extends TextFieldComponent {
  /**
   * Required to expose the key for the custom field.
   */
  public static ComponentKey = 'customText';

  public static get builderInfo() {
    return {
      title: 'Custom Text Field',
      icon: 'fa fa-pencil',
      group: 'basic',
      documentation: 'http://help.form.io/userguide/#textfield',
      weight: 0,
      schema: TextFieldComponent.schema()
    };
  }

  get defaultSchema() {
    return FieldCustomText.schema();
  }

  public static schema(...extend: any[]) {
    return TextFieldComponent.schema({
      label: 'Custom Text Field',
      key: 'textField1',
      type: 'textfield1',
      mask: false,
      inputType: 'text',
      inputMask: '',
      validate: {
        minLength: '',
        maxLength: '',
        pattern: ''
      }
    }, ...extend);
  }
}


/**
 * IMPORTANT :
 * Import this new component to within the index.ts to add to teh register function for all custom components
 * Without adding this to the register function the custom componnet cannot be used.
 */