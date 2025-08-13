
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            if (mobileMenu.classList.contains('active')) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });

        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.fade-up, .fade-in');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animate');
                }
            });
        }

        // Run animation on scroll
        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

        // Modal functions
        function openModal(jobTitle, location, type) {
            const modal = document.getElementById('application-modal');
            const modalJobTitle = document.getElementById('modal-job-title');
            const modalJobDetails = document.getElementById('modal-job-details');
            
            modalJobTitle.textContent = `Apply for ${jobTitle}`;
            modalJobDetails.textContent = `${location} • ${type}`;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('application-modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Reset form
            document.getElementById('job-application-form').reset();
            document.getElementById('file-upload-text').textContent = 'Click to upload your resume';
        }

        // Close modal when clicking outside
        document.getElementById('application-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // File upload feedback
        function updateFileName(input) {
            const fileUploadText = document.getElementById('file-upload-text');
            if (input.files && input.files[0]) {
                fileUploadText.textContent = input.files[0].name;
            } else {
                fileUploadText.textContent = 'Click to upload your resume';
            }
        }

        // Form submissions
        document.getElementById('job-application-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                // Show success message
                const modalBody = document.querySelector('.modal-body');
                modalBody.innerHTML = `
                    <div class="success-state">
                        <div class="success-icon">
                            <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="success-title">Application Submitted!</h3>
                        <p class="success-message">
                            Thank you for your interest. We'll review your application and get back to you soon.
                        </p>
                    </div>
                `;
                
                setTimeout(function() {
                    closeModal();
                    // Reset modal content
                    setTimeout(function() {
                        location.reload();
                    }, 500);
                }, 2000);
            }, 1500);
        });

        document.getElementById('general-application-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = e.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                // Show success message
                const formCard = document.querySelector('.form-card');
                formCard.innerHTML = `
                    <div class="success-state">
                        <div class="success-icon">
                            <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="success-title">Thank You for Your Interest!</h3>
                        <p class="success-message">
                            We've received your information and will reach out to you with relevant opportunities.
                        </p>
                    </div>
                `;
                
                setTimeout(function() {
                    location.reload();
                }, 3000);
            }, 1500);
        });

        // Search functionality (basic)
        document.getElementById('search-input').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // This would typically filter content or redirect to search results
            console.log('Searching for:', searchTerm);
        });

        // Header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(8px)';
            }
        });
 