AFRAME.registerComponent("newfish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `hurdle${i}`;
        var posX = Math.random() * 3000 + -1000;
        var posY = Math.random() * 2 + -1;
        var posZ = Math.random() * 3000 + -1000;
        var position = { x: posX, y: posY, z: posZ };
        this.Fish(id, position);
      }
    },
    Fish: (id, position) => {
      var islandEl = document.querySelector("#1island");
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 100, y: 100, z: 100 });
      fishEl.setAttribute("obj-model", "obj: ./assets/fish/fish.obj; mtl: ./assets/fish/fish.mtl");
      fishEl.setAttribute("animation-mixer", {});
      islandEl.appendChild(fishEl);
    },
  });
  