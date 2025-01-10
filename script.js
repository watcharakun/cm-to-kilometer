// ระบบคำนวณเซนติเมตรเป็นกิโลเมตร
document.addEventListener("DOMContentLoaded", () => {
    const cmInput = document.getElementById("cm-input");
    const convertBtn = document.getElementById("convert-btn");
    const resultSpan = document.getElementById("result");
  
    if (convertBtn) {
      convertBtn.addEventListener("click", () => {
        const cmValue = parseFloat(cmInput.value);
        if (!isNaN(cmValue)) {
          const kmValue = cmValue / 100000;
          resultSpan.textContent = kmValue.toFixed(5);
        } else {
          resultSpan.textContent = "กรุณาใส่ค่าที่ถูกต้อง";
        }
      });
    }

    

   
    // ระบบตรวจสอบเลขคู่-คี่
    const numberInput = document.getElementById("number-input");
    const checkBtn = document.getElementById("check-btn");
    const numberResult = document.getElementById("number-result");
  
    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        const number = parseInt(numberInput.value, 10);
        if (!isNaN(number)) {
          numberResult.textContent = number % 2 === 0 ? "เลขคู่" : "เลขคี่";
        } else {
          numberResult.textContent = "กรุณาใส่ตัวเลขที่ถูกต้อง";
        }
      });
    }
  });
