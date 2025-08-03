   // Toggle mobile menu
        const menuToggleBtn = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        menuToggleBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            menuToggleBtn.classList.toggle('active');
            menuToggleBtn.setAttribute('aria-expanded', isOpen);
        });

        // Accessibility: close menu when focus moves away (optional)
        navMenu.addEventListener('focusout', (e) => {
            if (!navMenu.contains(e.relatedTarget)) {
                navMenu.classList.remove('open');
                menuToggleBtn.classList.remove('active');
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Countdown Timer
        let countdownTime = (0 * 24 + 13) * 3600 + 15 * 60;

        const x = setInterval(function() {
            const days = Math.floor(countdownTime / (3600 * 24));
            const hours = Math.floor((countdownTime % (3600 * 24)) / 3600);
            const minutes = Math.floor((countdownTime % 3600) / 60);
            const seconds = countdownTime % 60;

            const daysDisplay = days > 0 ? days + (days === 1 ? " Day" : " Days") + " : " : "";
            const hoursDisplay = (hours < 10 ? "0" : "") + hours + " Hours : ";
            const minutesDisplay = (minutes < 10 ? "0" : "") + minutes + " Minutes : ";
            const secondsDisplay = (seconds < 10 ? "0" : "") + seconds + " Seconds";

            document.getElementById("countdown").innerHTML = daysDisplay + hoursDisplay + minutesDisplay + secondsDisplay;

            if (countdownTime <= 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "Registration Closed";
            }

            countdownTime--;
        }, 1000);

        // Typewriter effect for join button typed-text span
        const phrases = [
            "Whatsapp monetization",
            "Snapchat monetization",
            "chatgpt monetization",
            "Instagram monetization",
            "earn using AI",
            "earn doing Task",
            "Make 50$ Daily"
        ];

        const typedTextSpan = document.querySelector(".typed-text");
        const typingDelay = 120;
        const erasingDelay = 80;
        const newPhraseDelay = 1500; // Delay between current and next phrase
        let phraseIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < phrases[phraseIndex].length) {
                typedTextSpan.textContent += phrases[phraseIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newPhraseDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                phraseIndex++;
                if (phraseIndex >= phrases.length) phraseIndex = 0;
                setTimeout(type, typingDelay);
            }
        }

        document.addEventListener("DOMContentLoaded", function () { 
            if(phrases.length) setTimeout(type, newPhraseDelay);
        });








