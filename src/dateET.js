exports.dateFormattedET = function() {
    let timeNow = new Date();
    let dateNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();
    let monthNameET = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember']
    return dateNow + '.' + monthNameET[monthNow] + ' ' + yearNow;
}

console.log('Täna on ' + exports.dateFormattedET());