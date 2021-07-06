function openProgram() {
    console.log("Otwieramy program :)");
}

function getDate(){
    return date;
}


function closeProgram() {
    console.log("Zamykam program");
}

try {
    openProgram();
    getDate();
} catch(e) {
    console.log(`Błąd odczytu daty: ${e.message}`);
} finally {
    closeProgram();
}


