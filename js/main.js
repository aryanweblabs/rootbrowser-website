const modal = document.getElementById('downloadModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

const modalContent = {
    linux: {
        title: 'Linux Download',
        body: `
            <div class="download-step">
                <strong>1. Install dependencies</strong>
                <p>Use the system package manager to install Qt6 and WebEngine dependencies.</p>
                <code>sudo apt update
sudo apt install -y build-essential pkg-config git qt6-base-dev qt6-webengine-dev qt6-webengine-dev-tools libqt6webenginecore6-bin</code>
            </div>
            <div class="download-step">
                <strong>2. Clone the repo</strong>
                <code>git clone https://github.com/aryanweblabs/rootbrowser.git
cd rootbrowser</code>
            </div>
            <div class="download-step">
                <strong>3. Compile</strong>
                <code>g++ -std=c++17 -O2 -fPIC src/*.cpp -o rootbrowser $(pkg-config --cflags --libs Qt6WebEngineWidgets Qt6Widgets)</code>
            </div>
        `
    },
    windows: {
        title: 'Windows Download',
        body: `
            <div class="download-step">
                <strong>1. Install Qt 6</strong>
                <p>Download Qt Online Installer and install Qt 6.2+ with Qt WebEngine.</p>
            </div>
            <div class="download-step">
                <strong>2. Open MSVC or MinGW</strong>
                <p>Build using the Qt Creator project or qmake/mingw shell.</p>
            </div>
            <div class="download-step">
                <strong>3. Compile</strong>
                <code>git clone https://github.com/aryanweblabs/rootbrowser.git
cd rootbrowser
qmake
make</code>
            </div>
        `
    },
    macos: {
        title: 'macOS Download',
        body: `
            <div class="download-step">
                <strong>1. Install Homebrew</strong>
                <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
            </div>
            <div class="download-step">
                <strong>2. Install Qt</strong>
                <code>brew install qt6 qt6-webengine</code>
            </div>
            <div class="download-step">
                <strong>3. Build</strong>
                <code>git clone https://github.com/aryanweblabs/rootbrowser.git
cd rootbrowser
qmake
make</code>
            </div>
        `
    }
};

function showDownloadModal(platform) {
    const data = modalContent[platform];
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modal.classList.add('active');
}

function closeDownloadModal() {
    modal.classList.remove('active');
}

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeDownloadModal();
    }
});

function toggleFAQ(button) {
    const item = button.closest('.faq-item');
    item.classList.toggle('active');
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

document.getElementById('ctaDownload')?.addEventListener('click', () => showDownloadModal('linux'));
document.getElementById('ctaDownloadFinal')?.addEventListener('click', () => showDownloadModal('linux'));
document.getElementById('ctaGithub')?.addEventListener('click', () => {
    window.open('https://github.com/aryanweblabs/rootbrowser', '_blank');
});
