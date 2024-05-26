let currentSlide = 0;
        const slideWidth = 320; // card width + margin
        const track = document.querySelector('.carousel-track');

        function moveSlide(direction) {
            if (direction === 1 && currentSlide < (track.children.length - 3)) {
                currentSlide++;
            } else if (direction === -1 && currentSlide > 0) {
                currentSlide--;
            }
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
        }

        

        document.addEventListener('DOMContentLoaded', function () {
            console.log('Page loaded!');
        });


        document.querySelector('.card').addEventListener('mouseover', function() {
            console.log('Mouse is over the card!');
        });
        
        document.querySelector('.card').addEventListener('mouseout', function() {
            console.log('Mouse is out of the card!');
        });

//search
    document.getElementById('searchInput').addEventListener('keyup', function() {
        let filter = this.value.toUpperCase();
        let ul = document.getElementById('list');
        let li = ul.getElementsByTagName('li');
      
        for (let i = 0; i < li.length; i++) {
          let txtValue = li[i].textContent || li[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      });
      

      function cal1(){
        var a=document.getElementById('result').textContent;
        var b=document.getElementById('result1').textContent;
        var e=Number(a)+Number(b)+Number(c);
        d.textContent=e;
    }


    document.querySelectorAll('.item').forEach(item => {
      const price = parseFloat(item.getAttribute('data-price'));
      const quantityElem = item.querySelector('.quantity');
      const totalPriceElem = item.querySelector('.total-price');
      const incrementBtn = item.querySelector('.increment');
      const decrementBtn = item.querySelector('.decrement');

      incrementBtn.addEventListener('click', () => {
          let quantity = parseInt(quantityElem.textContent);
          quantity++;
          quantityElem.textContent = quantity;
          updateTotalPrice();
      });

      decrementBtn.addEventListener('click', () => {
          let quantity = parseInt(quantityElem.textContent);
          if (quantity > 0) {
              quantity--;
              quantityElem.textContent = quantity;
              updateTotalPrice();
          }
      });

      function updateTotalPrice() {
          const quantity = parseInt(quantityElem.textContent);
          const totalPrice = quantity * price;
          totalPriceElem.textContent = totalPrice.toFixed(2);
      }
  });