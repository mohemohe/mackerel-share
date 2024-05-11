const styles = {
    buttonWrapper: {
      display: "inline-flex"
    },
    button: {
      background: "#ddd",
      color: "#555",
      padding: "0.5rem 1rem",
      fontWeight: "bold",
      cursor: "pointer"
    },
    hoverButton: {
      background: "#ccc",
      color: "#555",
      padding: "0.5rem 1rem",
      fontWeight: "bold",
      cursor: "pointer"
    },
    activeButton: {
      background: "#777",
      color: "#fff",
      padding: "0.5rem 1rem",
      fontWeight: "bold"
    },
    input: {
      display: "none"
    },
    iframe: {
      border: 0
    }
  };
  
  export default class Mackerel {
    constructor(option) {
      const base = {
        target: "#mackerel",
        metrics: {},
        periods: ["30m", "1h", "6h", "1d"],
        period: "1d",
        width: "400px",
        height: "300px"
      };
      this.option = { ...base, ...option };
    }
  
    render() {
      let target = document.querySelector(this.option.target);
      if (!target) {
        target = this._createTarget();
      }
      let button = target.querySelector(`.mackerel-periods`);
      if (!button) {
        button = this._createButtons(target);
      }
      this._updateButtons(button);
  
      Object.keys(this.option.metrics).forEach(key => {
        let metric = target.querySelector(`.mackerel-${key}-wrapper`);
        if (!metric) {
          this._createMetrics(target, key);
        } else {
          this._updateMetrics(target);
        }
      });
    }
  
    _createTarget() {
      const wrapper = document.createElement("div");
      if (this.option.target.startsWith("#")) {
        wrapper.id = this.option.target.substring(1);
      } else if (this.option.target.startsWith(".")) {
        wrapper.classList.add(this.option.target.substring(1));
      } else {
        return;
      }
      document.body.insertAdjacentElement("beforeend", wrapper);
      return wrapper;
    }
  
    _createButtons(target) {
      const wrapper = document.createElement("form");
      wrapper.classList.add("mackerel-periods");
      this._setStyle(wrapper, styles.buttonWrapper);
  
      this.option.periods.forEach(period => {
        const label = document.createElement("label");
        label.innerText = period;
        label.addEventListener("mouseenter", () => {
          const checked = this.option.period === period;
          this._setStyle(
            label,
            checked ? styles.activeButton : styles.hoverButton
          );
        });
        label.addEventListener("mouseleave", () => {
          const checked = this.option.period === period;
          this._setStyle(label, checked ? styles.activeButton : styles.button);
        });
  
        const checked = this.option.period === period;
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "period";
        input.value = period;
        input.checked = checked;
        this._setStyle(input, styles.input);
        label.insertAdjacentElement("beforeend", input);
        wrapper.insertAdjacentElement("beforeend", label);
      });
      wrapper.addEventListener("change", event => {
        this.option.period = event.target.value;
        this.render();
      });
  
      target.insertAdjacentElement("beforeend", wrapper);
      return wrapper;
    }
  
    _updateButtons(target) {
      const labels = target.querySelectorAll("label");
      Array.from(labels).forEach(label => {
        const checked = this.option.period === label.innerText;
        this._setStyle(label, checked ? styles.activeButton : styles.button);
      });
    }
  
    _createMetrics(target, key) {
      const { width, height } = this.option;
  
      const wrapper = document.createElement("div");
      wrapper.classList.add(`mackerel-${key}-wrapper`);
      this._setStyle(wrapper, {
        display: "flex",
        flexWrap: "wrap"
      });
      this.option.metrics[key].forEach(metric => {
        const url = new URL(metric);
        const src = url.href.replace(url.search, "");
  
        const iframe = document.createElement("iframe");
        iframe.src = `${src}?period=${this.option.period}`;
        iframe.loading = "lazy";
        this._setStyle(iframe, {
          width,
          height,
          ...styles.iframe
        });
        wrapper.insertAdjacentElement("beforeend", iframe);
      });
      target.insertAdjacentElement("beforeend", wrapper);
      return wrapper;
    }
  
    _updateMetrics(target) {
      const iframes = target.querySelectorAll("iframe");
      Array.from(iframes).forEach(iframe => {
        const url = new URL(iframe.src);
        const src = url.href.replace(url.search, "");
        iframe.src = `${src}?period=${this.option.period}`;
      });
    }
  
    _setStyle(target, style) {
      target.style = target.style || {};
      Object.keys(style).forEach(key => {
        target.style[key] = style[key];
      });
    }
  }
  
