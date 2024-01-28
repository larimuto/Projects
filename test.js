function calculation(cdays,chours,cminutes,cseconds) {
    days = cseconds / 60 / 60 / 24 + (cminutes * 60) / 24 + chours / 24 + cdays;
    hours = (days * 24) + (cminutes / 60) + (cseconds / 60 / 60 ) + chours;
    minutes = cdays * 24 * 60 + chours / 60 + cseconds / 60 + cminutes;
    seconds =
      cseconds + cminutes / 60 + chours / 60 / 60 + cdays * 24 * 60 * 60;




console.log(minutes);

}
 

calculation(24,0,0,0);