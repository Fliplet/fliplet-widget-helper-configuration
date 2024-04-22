import { Field } from './field';

export class FieldList {
  constructor(fieldList) {
    this.#setFieldList(fieldList);
  }

  #fieldList = null;

  #setFieldList(fieldList) {
    this.#fieldList = fieldList;
  }

  field(name) {
    const field = _.find(this.#fieldList, { name });

    return new Field(field);
  }
}
