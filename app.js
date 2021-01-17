var random = [];
      generateGrid(); //calling function to create grid on screen
      generateBomb(); //calling function to generate bombs in random places

      function generateGrid() {
        for (var i = 1; i <= 81; i++) {
          var btn = document.createElement("Button"); //creating buttons
          btn.style.borderRadius = "50%"; //giving styles to btn
          btn.style.margin = "5px";
          btn.style.border = "none";
          btn.setAttribute("class", "grid-items"); //setting same class for all btn
          btn.setAttribute("id", "cell_" + i); //assigining unique id to each btn
          btn.setAttribute("value", i); //assigining i value to each btn
          btn.addEventListener("click", checkCell); //adding eventListener to each btn
          document.querySelector(".grid").appendChild(btn); //finally appending btn to grid
        }
      }

      //function to generate bomb at random places
      function generateBomb() {
        while (random.length < 10) {
          //creating 10 bombs
          var a = Math.ceil(Math.random() * 81); //generation random position
          if (random.indexOf(a) === -1) random.push(a);
        }
      }
      function reset() {
        location.reload();
      }

      function diasableGrid() {
        for (var i = 0; i < 81; i++) {
          document
            .querySelectorAll(".grid-items")
            [i].removeEventListener("click", checkCell);
        }
      }

      function checkCell() {
        if (random.indexOf(Number(this.value)) == -1) {
          document.getElementById(this.id).classList.add("pressedSafe");

          var a = document.getElementById("score");
          a.innerHTML = Number(a.innerHTML) + 1;

          this.removeEventListener("click", checkCell);
          if (x.textContent == 71) {
            document.getElementById("resultDisplay").textContent = "You Win";
            diasableGrid();
          }
        } else {
          for (var i = 0; i < random.length; i++) {
            document
              .getElementById("cell_" + random[i])
              .classList.add("pressedBomb");
          }
          document.getElementById("resultDisplay").textContent = "Game Over";
          diasableGrid();
        }
      }