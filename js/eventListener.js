document.addEventListener("DOMContentLoaded", () => {
    const month = `
    <div class="online-service">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="online">Online service</p>
                <span>Access to multiplayer games</span>
              </div>
              <p>+$1/mo</p>
            </div>

            <div class="larger-storage">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="storage">Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </div>
              <p>+$2/mo</p>
            </div>

            <div class="customizable-profile">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="profile">Customizable profile</p>
                <span>Custom theme on your profile</span>
              </div>
              <p>+$2/mo</p>
            </div>
    `;

    const year = `
              <div class="online-service">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="online">Online service</p>
                <span>Access to multiplayer games</span>
              </div>
              <p>+$10/yr</p>
            </div>

            <div class="larger-storage">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="storage">Larger storage</p>
                <span>Extra 1TB of cloud save</span>
              </div>
              <p>+$20/yr</p>
            </div>

            <div class="customizable-profile">
              <label class="custom-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="text-content">
                <p class="profile">Customizable profile</p>
                <span>Custom theme on your profile</span>
              </div>
              <p>+$20/yr</p>
            </div>
            `;
            const savedPlan = localStorage.getItem("dom101");
            console.log(savedPlan)
            const options = document.getElementById("options");
            console.log(`|${savedPlan}|`)
            options.innerHTML = savedPlan.trim() === "yearly" ? year : month;
  

});
