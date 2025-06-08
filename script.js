async function checkCode() {
  const codeInput = document.getElementById("codeInput").value.trim().toLowerCase();
  const errorMsg = document.getElementById("errorMsg");

  try {
    const res = await fetch("codes.json");
    const codes = await res.json();

    if (codes[codeInput]) {
      window.location.href = codes[codeInput];
    } else {
      errorMsg.textContent = "❌ Invalid code. Try again.";
    }
  } catch (e) {
    errorMsg.textContent = "⚠️ Error loading codes.";
  }
}