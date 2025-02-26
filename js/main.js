document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggle-switch");
  const billingPlans = document.querySelector(".billing-plans");
  const profile = document.getElementById("online-service");
  const largerStorage = document.getElementById("larger-storage");
  const customProfile = document.getElementById("custom-profile");
    const savedPlan = localStorage.getItem("dom101") || "monthly";

  const yearlyContent = `
    <div class="monthly-arcade">
      <img src="../assets/icon-arcade.svg" alt="arcade" />
      <p class="text">Arcade</p>
      <span>$90/yr</span>
      <p>2 months free</p>
    </div>
    <div class="monthly-advanced">
      <img src="../assets/icon-advanced.svg" alt="arcade" />
      <p class="text">Advanced</p>
      <span>$120/yr</span>
      <p>2 months free</p>
    </div>
    <div class="monthly-pro">
      <img src="../assets/icon-pro.svg" alt="arcade" />
      <p class="text">Pro</p>
      <span>$150/yr</span>
      <p>2 months free</p>
    </div>`;

  const monthlyContent = `
    <div class="monthly-arcade">
      <img src="../assets/icon-arcade.svg" alt="arcade" />
      <p class="text">Arcade</p>
      <span>$9/mon</span>
      <p>2 months free</p>

    </div>
    <div class="monthly-advanced">
      <img src="../assets/icon-advanced.svg" alt="arcade" />
      <p class="text">Advanced</p>
      <span>$12/mon</span>
      <p>2 months free</p>

    </div>
    <div class="monthly-pro">
      <img src="../assets/icon-pro.svg" alt="arcade" />
      <p class="text">Pro</p>
      <span>$15/mon</span>
      <p>2 months free</p>

    </div>`;
  billingPlans.innerHTML = savedPlan === 'yearly'? yearlyContent:monthlyContent;
    toggleSwitch.checked = savedPlan === "yearly";

  toggleSwitch.addEventListener("change", () => {
    billingPlans.innerHTML = toggleSwitch.checked
      ? yearlyContent
      : monthlyContent;
      localStorage.setItem("dom101",toggleSwitch.checked ? 'yearly ': 'monthly');
  });

  
});
