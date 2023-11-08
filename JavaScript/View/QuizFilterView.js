"use strict";
//Start

function quizFilterView() {
    app.innerHTML = /*HTML*/ `
    <nav id="nav-bar">
    <div id="nav-title-content">
        <div id="nav-title"onclick="changeView('mainView')">Testify</div>
    </div>
    <div id="nav-profile-content">
        <div id="nav-profile-text"onclick="changeView('myProfileView')">${
            currentUser().username
        }</div>
        <img id="nav-profile-picture" onclick="changeView('myProfileView')" src="${
            currentUser().image
        }">

        <div style="margin-right:5px"id="toggleMode">Dark/Light Mode
        </div>
        <label class="switch">
        <input id="toggleMode" onclick="toggleMode()" type="checkbox">
        <span class="slider round"></span>
        </label>
    </div>
    </nav>
    <div id="quizFilterSite">
        <div>Hei, denne siden er tom. :></div>
        <button class="link-view" onclick="changeView('mainView')">Tilbake</button>
        <h1>${model.app.currentTheme}-quizer</h1>
        <div id="extra-container">
            <div id="theQuiz-container">
                <div id="newest-Quiz-container" class="">
                    <h3>Nyeste quizer</h3>
                    <div id="newest-Quiz">
                        <div class="smallQuizContainer">
                            <h3>Hvor mange føtter har disse dyrene?</h3>
                        </div>
                        <div class="smallQuizContainer">
                            <h3>Hvilken panda er jeg?</h3>
                        </div>
                        <div class="smallQuizContainer">
                            <h3>Er dette egentlig et dyr?</h3>
                        </div>
                        <div class="smallQuizContainer">
                            <h3>Hvilken panda er jeg?</h3>
                        </div>
                        <div class="smallQuizContainer">
                            <h3>Hvilken panda er jeg?</h3>
                        </div>
                    </div>
                </div>
                <div id="popular-Quiz-container" class="">
                    <h3>Mest populære quizer</h3>
                    <div id="popular-Quiz">
                        <div class="smallQuizContainer">
                            <h3>Hvilken hund er jeg?</h3>
                            <p>Dyr</p>
                        </div>
                        <div class="smallQuizContainer">
                            <h3>Er dette dyret farlig?</h3>
                            <p>Dyr</p>
                        </div>
                        <div class="smallQuizContainer">
                            <h3></h3>
                        </div>
                        <div class="smallQuizContainer">
                        
                        </div>
                        <div class="smallQuizContainer">
                        
                        </div>
                    </div>
                </div>
            </div>
            <div id="">
                <img id="" src="">
                <input id="" placeholder="Søk i ${
                    model.app.currentTheme
                }-quizer...">
            </div>
        </div>
    </div>
    `;
}

//${getNewQuizes()}
//${getPopularQuizes()}
//${getNewQuizes(model.app.currentTheme)}
//${getPopularQuizes(model.app.currentTheme)}

//End
