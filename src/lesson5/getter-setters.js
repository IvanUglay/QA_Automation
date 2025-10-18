const data = {
  nested: {
    _field: "default",
    info: { tag: "general" }
  },
  get field() {
    return this.nested._field;
  },
  set field(v) {
    if (typeof v !== "string") throw new TypeError("field must be a string");
    this.nested._field = v;
  },

  get tag() {
    return this.nested.info.tag;
  },
  set tag(t) {
    this.nested.info.tag = String(t);
  },

  summarize() {
    return `${this.field} — ${this.tag}`;
  }
};

console.log(data.summarize());
