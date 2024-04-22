import { FieldList } from './fieldList';

export class Field {
  constructor(field) {
    this.#setField(field);
  }

  #field = null;

  #setField(field) {
    this.#field = field;
  }

  isShown() {
    return this.#field.show !== false;
  }

  toggle(show) {
    if (!this.#field) {
      return;
    }

    if (typeof this.#field.show === 'undefined') {
      Vue.set(this.#field, 'show', true);
    }

    if (typeof show === 'undefined') {
      this.#field.show = !this.#field.show;

      return;
    }

    this.#field.show = !!show;
  }

  get(index) {
    if (!this.#field) {
      return;
    }

    if (this.#field.type === 'list' && typeof index !== 'undefined') {
      return new FieldList(this.#field.value[index]);
    }

    return this.#field.value;
  }

  set(value) {
    if (!this.#field) {
      return;
    }

    this.#field.value = value;

    if (this.#field.provider) {
      this.#field.provider.emit('set-data', value);
    }
  }

  setOptions(options) {
    if (!this.#field) {
      return;
    }

    if (!['dropdown', 'radio', 'checkbox'].includes(this.#field.type)) {
      throw new Error('Field type must be dropdown, radio or checkbox');
    }

    Vue.set(this.#field, 'options', options);
  }
}
