$(document).ready(function() {
    const content = $('#content');

    function loadHome() {
        $.get('https://jsonplaceholder.typicode.com/users', function(users) {
            content.empty().append('<h2 class="center-text">Users</h2>');
            users.forEach(user => {
                content.append(`
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text"><b>ID no.:</b> ${user.id}</p>
                            <p class="card-text"><b>Username:</b> ${user.username}</p>
                            <p class="card-text"><b>Email:</b> ${user.email}</p>
                            <p class="card-text"><b>Address:</b> ${user.address.street},<br>${user.address.suite},${user.address.city},<br>${user.address.zipcode},<br>${user.address.geo.lat},${user.address.geo.lng}</p>
                            <p class="card-text"><b>Phone:</b> ${user.phone}</p>
                            <p class="card-text"><b>Website:</b> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                            <p class="card-text"><b>Company:</b> ${user.company.name},<br>${user.company.catchPhrase},${user.company.bs}</p>
                        </div>
                    </div>
                `);
            });
        });
    }

    function loadGallery() {
        $.get('https://jsonplaceholder.typicode.com/photos', function(photos) {
            content.empty().append('<h2 class="center-text">Gallery</h2>');
            photos.slice(0, 100).forEach(photo => {  // Limit to first 20 photos for performance
                content.append(`
                    <div class="card mb-3">
                        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                        <div class="card-body">
                            <h5 class="card-title">${photo.title}</h5>
                        </div>
                    </div>
                `);
            });
        });
    }

    function loadAbout() {
        $('#content').empty().append(`
        <h2 class="center-text">About</h2>
            <div class="card mx-auto mt-4" style="max-width: 600px;">
                <div class="card-body">
                    <div class="text-center">
                        <img src="dell.png" alt="Developer's Picture" class="img-fluid rounded-circle mb-3" style="width: auto; height: auto;">
                    </div>
                    <p class="text-center">This application was developed by Windellson B. Arellano.</p>
                    <p class="text-center">It demonstrates a simple PWA with Bootstrap, fetching data from JSONPlaceholder API.</p>
                </div>
            </div>
        `);
    }

    $('#nav-home').click(function() {
        loadHome();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $('#nav-gallery').click(function() {
        loadGallery();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    $('#nav-about').click(function() {
        loadAbout();
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Load Home by default
    loadHome();
});
