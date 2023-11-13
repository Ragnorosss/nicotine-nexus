document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup-age");
  
    // Открывает попап при загрузке страницы
    setTimeout(() => {
      popup.classList.add("active");
    }, 1000);
  
    // Закрывает попап при нажатии на кнопку "Да"
    window.closePopup = function () {
      popup.classList.remove("active");
    };
  
    // Отказывает в доступе при нажатии на кнопку "Нет"
    window.denyEntry = function () {
        window.location.href = 'https://nexuse-ragnorosss.vercel.app/error.html';
    };
  });
  