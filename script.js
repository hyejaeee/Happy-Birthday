document.addEventListener('DOMContentLoaded', function() {
    // Buang bahagian ini
    /*
    fetch('playlist.json')
        .then(response => response.json())
        .then(data => {
            const playlist = document.getElementById('playlist');
            data.songs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = song;
                playlist.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading playlist:', error));
    */
    
    // Mengendalikan penghantaran borang mesej hari lahir
    const form = document.getElementById('birthdayMessageForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const messageInput = document.getElementById('messageInput');
        const confirmationMessage = document.getElementById('confirmationMessage');
        
        // Simpan mesej ke fail
        fetch('save_message.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodeURIComponent(nameInput.value)}&email=${encodeURIComponent(emailInput.value)}&message=${encodeURIComponent(messageInput.value)}`
        })
        .then(response => {
            if (response.ok) {
                confirmationMessage.style.display = 'block';
                nameInput.value = ''; // Kosongkan input
                emailInput.value = ''; // Kosongkan input
                messageInput.value = ''; // Kosongkan textarea
            } else {
                console.error('Failed to save message');
            }
        })
        .catch(error => console.error('Error saving message:', error));
    });
    
    // Memuatkan galeri dari fail JSON
    fetch('gallery.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.images.forEach(image => {
                const item = document.createElement('div');
                item.className = 'item';
                
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;
                
                const title = document.createElement('div');
                title.className = 'title';
                title.textContent = image.title;
                
                item.appendChild(img);
                item.appendChild(title);
                gallery.appendChild(item);
            });
        })
        .catch(error => console.error('Error loading gallery:', error));
});
