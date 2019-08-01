/**
 * This is one of the most simple blocks you can build
 */
panel.plugin("demo/info-block", {
  components: {
    "k-editor-info-block": {
      // don't add unwanted html attributes
      inheritAttrs: false,

      // will appear as title in the blocks dropdown
      label: "Info",

      // icon for the blocks dropdown
      icon: "alert",

      // the type is required and will be used to
      // load the right component and snippet
      type: "info",

      // get the block content
      props: {
        content: String,
      },

      // block methods
      methods: {
        // the block must be focusable somehow
        // In this case we focus on the input.
        focus() {
          this.$refs.input.focus();
        },
        // The input event is sent to the editor
        // to update the block content
        onInput(event) {
          this.$emit("input", {
            content: event.target.value
          });
        }
      },
      // simple template. In single file components
      // this would be a bit nicer to read. You should
      // definitely go for single file components for more
      // complex blocks
      template: `
        <input type="text" ref="input" :value="content" @input="onInput">
      `,
    }
  }
});

