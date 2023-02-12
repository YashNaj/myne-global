<script context="module">
    let id = 1;
  
    export function uid() {
      return `ui:${id++}`;
    }
  
    export function clone(json) {
      return JSON.parse(JSON.stringify(json));
    }
  
    export function onClickOutside(element, callback) {
      const onClick = (event) => !element.contains(event.target) && callback();
  
      document.body.addEventListener("mousedown", onClick);
  
      return {
        update(newCallback) {
          callback = newCallback;
        },
  
        destroy() {
          document.body.removeEventListener("mousedown", onClick);
        }
      };
    }
  </script>
  
  <div class="ui">
    <slot />
  </div>
  