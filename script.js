document.addEventListener('DOMContentLoaded', function () {
    const chatbox = document.getElementById("chatbox");
    const openCloseChatBtn = document.getElementById('open-close-chat-btn');
    const btnsContainer = document.getElementById('btns-container');

    openCloseChatBtn.addEventListener('click', () => {
        toggleChatbox();
    });

    function toggleChatbox() {
        if (chatbox.style.display === 'none') {
            chatbox.style.display = 'block';
            openCloseChatBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            `;
        } else {
            chatbox.style.display = 'none';
            openCloseChatBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
            </svg>
            `;
        }
    }

    // Handle form submission
    btnsContainer.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const url = event.target.action;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Process the response if needed
            // For example, you can update the UI or show a success message
            console.log('Form submitted successfully!');
        } catch (error) {
            console.error('Error during form submission:', error);
        }
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function originalContent() {
    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const originalContent = `
            <div class=""> 
                <div class="bg-info text-center text-light" id="commerceTitle">
                            <h2 class="fs-5 pt-3">Chisissez votre choie</h2>
                        </div>
                <div id="btn-commerce" onclick="btnClickCommerce()" class="w-100 mt-5 text-center fs-5 fw-semibold pt-2">
                    Commerce
                </div> 
                <div id="btn-vente" onclick="btnClickVente()" class="w-100 mt-5 text-center fs-5 fw-semibold pt-2">
                    vente
                </div> 
                <div id="btn-CRC" onclick="btnClickCRC()" class="w-100 mt-5 text-center fs-5 fw-semibold pt-2">
                    CRC
                </div> 
            </div>
        `;
        btnsContainer.innerHTML = originalContent;
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////
function btnsContents(title){
    const newContent =`
        <div class="bg-info text-center text-light" id="commerceTitle">
            <h2>${title}</h2>
        </div>
        <form action="filterData.php" method="POST" class="p-4">
            <div class="mt-4">
                <label for="name">Date debut:</label>
                <input type="date" name="date_debut" id="date-commerce" class="form-control">
            </div>
            <div class="mt-4">
                <label for="name">Date fin:</label>
                <input type="date" name="date_fin" id="date-commerce" class="form-control">
            </div>
            <div class="grid p-3">
                <div class="row">
                    <a class="col-4 btn text-danger m-4" id="retourBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                        </svg>
                        Retour
                    </a>
                    <button type="submit" onclick="(e)=>{e.preventDefault();}" class="col-4 btn btn-outline-success m-4" onclick="btnToCommerceQuesionts()">suivant</button>
                </div>
            </div>
        </form>
    `;
    return newContent;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


const btnsContainer = document.getElementById('btns-container');
const btnCommerce = document.getElementById('btn-commerce');
const btnVente = document.getElementById('btn-vente');
const btnCRC = document.getElementById('btn-CRC');


function btnClickCommerce(){
    const newContent =btnsContents('Commerce');
    btnsContainer.innerHTML = newContent;
    originalContent();
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnClickVente(){
    const newContent =btnsContents('Vente');
    btnsContainer.innerHTML = newContent;
    originalContent();
} 
///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnClickCRC(){
    const newContent =btnsContents('CRC');
    btnsContainer.innerHTML = newContent;
    originalContent();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////


function question(id,Q,fun){
    const question = `
        <div id="${id}" onclick="${fun}" class="w-100 mt-4 text-center fs-5 fw-light pt-1">
            ${Q}
        </div>
    `;
    return question;
}
function questionsContents(Qs,id){
    const newContent = `
        <div class="bg-info text-center text-light" id="${id}">
        <h2 class="fs-5 pt-3">Chisissez la quetion qui vous voullez</h2>
        </div>
        <div>
            ${Qs}
        </div>
        <div class="grid p-3">
            <div class="row">
                <a class="col-4 btn text-danger m-4" id="retourBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                    </svg>
                    Retour
                </a>
                <a class="col-4 btn btn-outline-success m-4" id="retourBtn">suivant</a>
            </div>
        </div>
    `;
    return newContent;
}

function btnToCommerceQuesionts() {
    
    const questions=`
        ${question('commerceQ1','hi,how are you ?c',"btnCommerceQ1()")}
        ${question('commerceQ2','hi,how are you,today ?c',"btnCommerceQ2()")}
        ${question('commerceQ3','hello,how are you ?c',"btnCommerceQ2()")}
    `;
    const newContent = questionsContents(questions,'commerceTitle');
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const originalContentHTML =btnsContents('Commerce');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function btnToVenteQuesionts() {
    const questions=`
        ${question('venteQ1','hi,how are you ?v',"btnVenteQ1()")}
        ${question('venteQ2','hi,how are you,today ?v',"btnVenteQ2()")}
        ${question('venteQ3','hello,how are you ?v',"btnVenteQ3()")}
    `;
    const newContent = questionsContents(questions,'VenteTitle');
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const originalContentHTML =btnsContents('Vente');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
function btnToCRCQuesionts() {
    const questions=`
        ${question('CRCQ1','hi,how are you ?C',"btnCRCQ1()")}
        ${question('CRCQ2','hi,how are you,today ?C',"btnCRCQ2()")}
        ${question('CRCQ3','hello,how are you ?C',"btnCRCQ3()")}
    `;
    const newContent = questionsContents(questions,'CRCTitle');
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const originalContentHTML =btnsContents('CRC');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

function responseContents(qs,resp,id){
    const newContent = `
        <div class="bg-info text-center text-light" id="${id}">
        <h2 class="fs-5 pt-3">${qs}</h2>
        </div>
        <div>
            <div id="commerceQ1" class="w-100 mt-5 text-center fs-5 fw-light pt-1">
                ${resp}
            </div>
        </div>
        <div class="grid p-3">
            <div class="row">
                <a class="col-4 btn text-danger m-4" id="retourBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                    </svg>
                    Retour
                </a>
                <a class="col-4 btn btn-outline-success m-4" id="retourBtn">suivant</a>
            </div>
        </div>
    `;
    return newContent;
}


function btnCommerceQ1() {
    const newContent = responseContents('hi,how are you ?c',"hi,I'm fine.","commerceQ1");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('commerceQ1','hi,how are you ?c',"btnCommerceQ1()")}
        ${question('commerceQ2','hi,how are you,today ?c',"btnCommerceQ2()")}
        ${question('commerceQ3','hello,how are you ?c',"btnCommerceQ2()")}
    `;
    const originalContentHTML = questionsContents(questions,'commerceTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnCommerceQ2() {
    const newContent = responseContents('hi,how are you today ?c',"hi,I'm fine today.","commerceQ2");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('commerceQ1','hi,how are you ?c',"btnCommerceQ1()")}
        ${question('commerceQ2','hi,how are you,today ?c',"btnCommerceQ2()")}
        ${question('commerceQ3','hello,how are you ?c',"btnCommerceQ2()")}
    `;
    const originalContentHTML = questionsContents(questions,'commerceTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

function btnCommerceQ3() {
    const newContent = responseContents('hello,how are you ?c',"hello,I'm fine.","commerceQ3");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('commerceQ1','hi,how are you ?c',"btnCommerceQ1()")}
        ${question('commerceQ2','hi,how are you,today ?c',"btnCommerceQ2()")}
        ${question('commerceQ3','hello,how are you ?c',"btnCommerceQ2()")}
    `;
    const originalContentHTML = questionsContents(questions,'commerceTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////



function btnVenteQ1() {
    const newContent = responseContents('hi,how are you ?v',"hi,I'm fine.","venteQ1");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('venteQ1','hi,how are you ?v',"btnVenteQ1()")}
        ${question('venteQ2','hi,how are you,today ?v',"btnVenteQ2()")}
        ${question('venteQ3','hello,how are you ?v',"btnVenteQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'venteTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnVenteQ2() {
    const newContent = responseContents('hi,how are you today ?v',"hi,I'm fine today.","venteQ2");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('venteQ1','hi,how are you ?v',"btnVenteQ1()")}
        ${question('venteQ2','hi,how are you,today ?v',"btnVenteQ2()")}
        ${question('venteQ3','hello,how are you ?v',"btnVenteQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'venteTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

function btnVenteQ3() {
    const newContent = responseContents('hello,how are you ?v',"hello,I'm fine.","venteQ3");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('venteQ1','hello,how are you ?v',"btnVenteQ1()")}
        ${question('venteQ2','hello,how are you,today ?v',"btnVenteQ2()")}
        ${question('venteQ3','hellollo,how are you ?v',"btnVenteQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'venteTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////



function btnCRCQ1() {
    const newContent = responseContents('hi,how are you ?C',"hi,I'm fine.","CRCQ1");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('CRCQ1','hi,how are you ?C',"btnCRCQ1()")}
        ${question('CRCQ2','hi,how are you,today ?C',"btnCRCQ2()")}
        ${question('CRCQ3','hello,how are you ?C',"btnCRCQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'CRCTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnCRCQ2() {
    const newContent = responseContents('hi,how are you today?C',"hi,I'm fine today.","CRCQ2");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('CRCQ1','hi,how are you ?C',"btnCRCQ1()")}
        ${question('CRCQ2','hi,how are you,today ?C',"btnCRCQ2()")}
        ${question('CRCQ3','hello,how are you ?C',"btnCRCQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'CRCTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////

function btnCRCQ3() {
    const newContent = responseContents('hello,how are you ?C',"hello,I'm fine.","CRCQ3");
    btnsContainer.innerHTML = newContent;

    const retourBtn = document.getElementById('retourBtn');
    retourBtn.addEventListener('click', () => {
        const questions=`
        ${question('CRCQ1','hi,how are you ?C',"btnCRCQ1()")}
        ${question('CRCQ2','hi,how are you,today ?C',"btnCRCQ2()")}
        ${question('CRCQ3','hello,how are you ?C',"btnCRCQ3()")}
    `;
    const originalContentHTML = questionsContents(questions,'CRCTitle');
        btnsContainer.innerHTML = originalContentHTML;
        originalContent(); 
    });
}

