/*! glx-operating_numbers - v0.0.1-SNAPSHOT - 2014-11-06
 * http://glx-operating_numbers.greylogix.local/
 * Copyright (c) 2014 Hendrik Froemming;
 * Licensed 
 */
angular.module('app', [
    'ngRoute',
    'datainput',
    'statsview',
    //'highcharts-ng',
    'ngResource',
    'ngCookies',
    'pascalprecht.translate',
    'services.console',
    'directives.highcharts',
    'templates.app',
    'templates.common',
    'options',
    'delete'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', '$translateProvider',

    function($routeProvider, $locationProvider, $translateProvider) {
        $locationProvider.html5Mode(false);
        $routeProvider.otherwise({
            redirectTo: '/customersatisfaction'
        });
        $translateProvider.translations('de', {
            '_': '',
            '_first': 'Anfang',
            '_highcharts.test.title': 'GreyLogix Mitarbeiter',
            '_highcharts.test.employees': 'Mitarbeiter',
            '_language': 'Sprache',
            '_last': 'Ende',
            '_logout': 'Abmelden',
            '_next': 'Weiter',
            '_no': 'Nein',
            '_number': 'Anzahl',
            '_pageSize': 'Elemente pro Seite',
            '_previous': 'Zurück',
            '_timekeeping': 'Arbeitszeiterfassung',
            '_users.costcenter': 'Kostenstelle',
            '_users.division': 'Standort',
            '_users.eMail': 'E-Mail',
            '_users.firstname': 'Vorname',
            '_users.iId': 'Kürzel',
            '_users.lastname': 'Nachname',
            '_users.mobilePhone': 'Handy',
            '_users.name': 'Name',
            '_users.phoneExtension': 'Durchwahl',
            '_users.roomNr': 'Raumnummer',
            '_users.user': 'Benutzer',
            '_yes': 'Ja',
            '_options': 'Einstellungen',
            '_delete.datarecord': 'Möchten sie den folgenden Datensatz wirklich löschen? ',
            '_data.delete': 'Daten Löschen',
            '_attention': 'Achtung !',
            '_note': 'Kommentar',
            '_date': 'Datum',
            '_days': 'Tage',
            '_date.otherdate': 'anderes Datum als heute?',
            '_back': 'Zurück',
            '_value': 'Wert',
            '_search': 'suche',
            '_delete': 'löschen',
            '_attribute': 'Attribut',
            '_views': 'Ansichten',
            '_succesfully.saved': 'Daten erfolgreich gespeichert',
            '_note.input.help': 'Bemerkung ?',
            '_customer.satisfaction': 'Kundenzufriedenheit',
            '_data.input': 'Dateneingabe',
            '_customer.name': 'Kundenname',
            '_projectnumber': 'Projektnummer',
            '_customer.name.input': 'Bitte Kundennamen eingeben',
            '_customer.satisfaction.input': 'Zahl zwischen 1 und 5 eingeben (1: sehr unzufrieden, 2: unzufrieden, 3: ok, 4: zufrieden, 5:sehr zufrieden)',
            '_customer.profjectnumber.input': 'Projektnummer des Projektes eingeben',
            '_customer.veryDissatisfied': 'sehr unzufrieden',
            '_customer.dissatisfied': 'unzufrieden',
            '_customer.ok': 'ok',
            '_customer.satisfied': 'zufrieden',
            '_customer.verySatisfied': 'sehr zufrieden',
            '_customer.number.ask.customers': 'Anzahl gefragter Kunden: ',
            '_customer.title': 'Kundenzufriedenheit',
            '_workingstepmistake': 'Fehler pro Arbeitsschritt',
            '_workingstepmistake.logistics': 'Logistik',
            '_workingstepmistake.logistics.input.help': 'Bitte Anzahl der Fehler in der Logistik eingeben',
            '_workingstepmistake.mechanicalconstruction': 'Mechanischer Aufbau',
            '_workingstepmistake.mechanicalconstruction.input.help': 'Bitte Anzahl der Fehler in dem Mechanischen Aufbau eingeben',
            '_workingstepmistake.assembly': 'Montage',
            '_workingstepmistake.assembly.input.help': 'Bitte Anzahl der Fehler in der Montage eingeben',
            '_workingstepmistake.finalassembly': 'Endmontage',
            '_workingstepmistake.finalassembly.input.help': 'Bitte Anzahl der Fehler in der Endmontage eingeben',
            '_workingstepmistake.check': 'Prüfen',
            '_workingstepmistake.check.input.help': 'Bitte Anzahl der Fehler bei der Prüfung eingeben',
            '_workingstepmistake.rework': 'Nacharbeit',
            '_workingstepmistake.rework.input.help': 'Bitte Anzahl der Fehler in der Nacharbeit eingeben',
            '_remainingPoints': 'Restpunkte',
            '_remainingPoints.construction': 'Konstruktion',
            '_remainingPoints.production': 'Produktion',
            '_remainingPoints.byDelivery': 'Bei Auslieferung',
            '_remainingPoints.construction.input.help': 'Bitte Konstruktion Wert eingeben',
            '_remainingPoints.production.input.help': 'Bitte Produktion Wert eingeben',
            '_remainingPoints.byDelivery.input.help': 'Bitte "Bei Auslieferung" Wert eingeben',
            '_remainingPoints.mistakes.per.cabinet': 'Fehler pro Schrank',
            '_month': 'Monat',
            '_year': 'Jahr',
            '_january': 'Januar',
            '_february': 'Februar',
            '_march': 'März',
            '_april': 'April',
            '_may': 'Mai',
            '_june': 'Juni',
            '_july': 'Junli',
            '_august': 'August',
            '_september': 'September',
            '_october': 'October',
            '_november': 'November',
            '_december': 'December',
            '_calendar.week': 'Kalenderwoche',
            '_data.already.existing.month': 'Daten für diesen Monat in dem Jahr schon vorhanden',
            '_data.already.existing.projectnumber': "Daten für diese Projektnummer sind schon vorhanden",
            '_data.already.existing.calendar.week': "Daten für diese Kalenderwoche sind schon vorhanden",
            '_wish.update.data': 'Möchten sie die Daten trotzdem ersetzen?',
            '_upstream.process.mistakes': 'Fehler vorgelagerter Prozess',
            '_upstream.process.mistakes.headline': 'Qualitätsgrad vorgelagerter Prozess / BU’s',
            '_upstream.process.mistakes.percent': 'Prozent %',
            '_upstream.process.mistakes.percent.input.help': 'Bitte Prozent wert zwischen 0 und 100 eingeben',
            '_upstream.process.mistakes.quality': 'Qualitätsgrad in %',
            '_upstream.process.mistakes.actual': 'IST %',
            '_upstream.process.mistakes.target': 'Soll %',
            '_portfolio': 'Bestand',
            '_portfolio.title': 'Anzahl Schaltschränke in der Produktion',
            '_portfolio.input.help': 'Bitte den Wert für den Bestand eingeben',
            '_labour.productivity': 'Arbeitsproduktivität',
            '_labour.productivity.avg.employee': 'Durchschnittliche Mitarbeiter Anzahl',
            '_labour.productivity.avg.employee.input.help': 'Bitte den Wert für die Durchschnittliche Mitarbeiter Anzahl eingeben',
            '_labour.productivity.completed.cabinets': 'Fertig gestellte Schränke',
            '_labour.productivity.completed.cabinets.input.help': 'BtranslateProvideritte die Anzahl der fertig gestellte Schränke dieses Jahres eingeben',
            '_labour.productivity.yAxis.title': 'Schaltschränke pro Mitarbeiter',
            '_scrapped.material': 'Ausschuss Material',
            '_scrapped.material.cost': 'Kosten €',
            '_scrapped.material.cost.input.help': 'bitte den Wert für die Kosten eingeben ',
            '_delivery.reliability.logistics': 'Liefertreue Logistik',
            '_delivery.reliability.logistics.number.commissioning.trolleys': 'Anzahl Kommissionierwagen',
            '_delivery.reliability.logistics.number.commissioning.trolleys.input.help': 'Bitte die absolute Anzahl Kommissionierwagen eingeben',
            '_delivery.reliability.logistics.number.incomplete.commissioning.trolleys': 'Anzahl vollständige Kommissionierwagen',
            '_delivery.reliability.logistics.number.incomplete.commissioning.trolleys.input.help': 'Bitte die prozentuale Anzahl der vollständigen Kommissionierwagen eingeben',
            '_delivery.reliability.logistics.deviation.in.days': 'Abweichung in Tagen',
            '_delivery.reliability.logistics.deviation.in.days.input.help': 'Bitte Wert für die Abweichung in Tagen eingeben',
            '_delivery.reliability.logistics.title': 'Anzahl Kommissionierungen',
            '_capacity': 'Auslastung',
            '_capacity.title': 'Auslastung in der Produktion',
            '_capacity.percent': 'Auslastung in Prozent',
            '_capacity.percent.input.help': 'Bitte den Wert für die Auslastung in Prozent eingeben(50%-150%)',
            '_ideas.process.improvements': 'Ideen Prozessverbesserung',
            '_ideas.process.improvements.number.ideas': 'Anzahl Ideen',
            '_ideas.process.improvements.ideas.overall': 'Ideen Gesamt',
            '_ideas.process.improvements.ideas.overall.input.help': 'Bitte die gesamte Anzahl der Ideen eingeben',
            '_ideas.process.improvements.implemented.ideas': 'Umgesetzte Ideen',
            '_ideas.process.improvements.implemented.ideas.input.help': 'Bitte die Anzahl der umgesetzten Ideen eingeben',
            '_processing.time': 'Durchlaufzeit',
            '_processing.time.title': 'Durchlaufzeiten',
            '_processing.time.ready.for.inspection': 'Prüfbereit',
            '_processing.time.ready.for.inspection.input.help': 'Bitte Prüfbereit Wert eingeben',
            '_processing.time.remaining.points.finished': 'Restpunkte erledigt',
            '_processing.time.remaining.points.finished.input.help': 'Bitte Restpunkte erledigt Wert eingeben',
            '_processing.time.delivered': 'Ausgeliefert',
            '_processing.time.delivered.input.help': 'Bitte Ausgeliefert Wert eingeben',
            '_presentation.interval': 'Präsentations intervall',
            '_presentation.interval.input.help': 'Bitte die Zeit in Sekunden für den Presentations Intervall eingeben',
            '_send.option.to.server': 'Zum Server schicken',
            '_send.option.to.server.input.help': 'Sendet die Optionen zum Server',
            '_get.server.updates': 'optionen updates vom Server erhalten',
            '_options.updates': 'Optionen updates',
            '_options.send.to.server': 'Optionen zum Server senden',
            '_succesfully.changed.in': 'Erfolgreich geändert auf',
            '_succesfully.send': 'Erfolgreich gesendet',
            '_seconds': " sekunden",
            '_admin.password': 'Admin Passwort',
            '_admin.password.new': 'neues Admin Passwort',
            '_admin.password.new.info': 'Ein neues admin Passwort erstellen',
            '_admin.password.repeat': 'Admin Passwort wiederholen',
            '_admin.password.old': 'Altes Admin Passwort',
            '_admin.password.enter': 'Bitte Admin Passwort eingeben',
            '_number.produced.cabinets': 'Anzahl gefertigte Schaltschränke',
            '_number.produced.cabinets.actual': 'Anzahl gefertigte Schaltschränke Ist',
            '_number.produced.cabinets.actual.input.help': 'Bitte die gesamte Anzahl der gefertigten Schaltschränke für dieses Jahr eingeben',
            '_number.produced.cabinets.target': 'Anzahl gefertigte Schaltschränke Soll',
            '_number.produced.cabinets.target.input.help': 'Bitte die zu erreichende Anzahl gefertigter Schaltschränke für das Jahr eingeben. Dieser Wert kann nur 1 mal pro Jahr eingeben werden!',
            '_delivery.reliability.upstream.construction': 'Liefertreue vorgelagerte Konstruktion',
            '_delivery.reliability.upstream.construction.deviation.in.days': 'Abweichung in Tagen',
            '_delivery.reliability.upstream.construction.deviation.in.days.input.help': 'Bitte die Abweichung in Tagen eingeben',
            '_under.target': 'Unter Soll',
            '_in.target': 'Im Soll',
            '_over.target': 'Über Soll',
            '_actual': 'Ist',
            '_target': 'Soll',
            '_actual.last': 'Ist letzen',
            '_target.for': 'Soll für',
            '_months': 'Monate',
            '_aspiration': 'Angestrebtes Ziel',
            '_yearly.average.target': 'Jahresdurchschnitt Soll',
            '_yearly.average.actual': 'Jahresdurchschnitt Ist',
            '_average.value.calendar.year': 'Durchschnittswert<br>des Kalenderjahres',
            '_average.cost': 'Kostendurchschnitt',
            '_target.delivered': 'Ausgeliefert Soll',
            '_target.remainingpoints.done': 'Restpunkte<br>erledigt',
            '_target.ready.for.inspection': 'Prüfbereit Soll',
            '_target.value': 'Sollwert',
            '_target.deviation.range': 'Soll Abweichungsbereich',
            '_average': 'durchschnitt'
        });
        $translateProvider.translations('en', {
            '_': '',
            '_first': 'First',
            '_highcharts.test.title': 'GreyLogix Employees',
            '_highcharts.test.employees': 'Employees',
            '_language': 'Language',
            '_last': 'Last',
            '_logout': 'Logout',
            '_next': 'Next',
            '_no': 'No',
            '_number': 'number',
            '_pageSize': 'Page Size',
            '_previous': 'Previous',
            '_timekeeping': 'Timekeeping',
            '_users.costcenter': 'Costcenter',
            '_users.division': 'Division',
            '_users.eMail': 'E-Mail',
            '_users.firstname': 'Firstname',
            '_users.iId': 'Abbreviation',
            '_users.lastname': 'Lastname',
            '_users.mobilePhone': 'Mobile',
            '_users.name': 'Name',
            '_users.phoneExtension': 'Phone Extension',
            '_users.roomNr': 'Room Number',
            '_users.user': 'User',
            '_yes': 'Yes',
            '_options': 'options',
            '_delete.datarecord': 'Do you really wish to delete the following record? ',
            '_data.delete': 'delete data',
            '_attention': 'Attention !',
            '_note': 'note',
            '_date': 'date',
            '_days': 'days',
            '_date.otherdate': 'other date than today?',
            '_back': 'back',
            '_value': 'value',
            '_search': 'search',
            '_delete': 'delete',
            '_attribute': 'attribute',
            '_views': 'views',
            '_succesfully.saved': 'Data successfully stored ',
            '_note.input.help': 'something special',
            '_customer.satisfaction': 'customersatisfaction',
            '_data.input': 'Data input',
            '_customer.name': 'customer name',
            '_projectnumber': 'projectnumber',
            '_customer.name.input': 'enter the customer name',
            '_customer.satisfaction.input': 'enter number between 1 and 5 (1: very dissatisfied, 2: dissatisfied, 3: ok, 4: satisfied, 5:very satisfied)',
            '_customer.profjectnumber.input': 'enter projectnumber from the project',
            '_customer.veryDissatisfied': 'very dissatisfied',
            '_customer.dissatisfied': 'dissatisfied',
            '_customer.ok': 'ok',
            '_customer.satisfied': 'satisfied',
            '_customer.verySatisfied': 'very satisfied',
            '_customer.number.ask.customers': 'number of customer demand: ',
            '_customer.title': 'customer satisfaction',
            '_workingstepmistake': 'workingstepmistake',
            '_workingstepmistake.logistics': 'logistics',
            '_workingstepmistake.logistics.input.help': 'please enter number of mistakes',
            '_workingstepmistake.mechanicalconstruction': 'mechanicalconstruction',
            '_workingstepmistake.mechanicalconstruction.input.help': 'please enter number of mistakes',
            '_workingstepmistake.assembly': 'assembly',
            '_workingstepmistake.assembly.input.help': 'please enter number of mistakes',
            '_workingstepmistake.finalassembly': 'finalassembly',
            '_workingstepmistake.finalassembly.input.help': 'please enter number of mistakes',
            '_workingstepmistake.check': 'check',
            '_workingstepmistake.check.input.help': 'please enter number of mistakes',
            '_workingstepmistake.rework': 'rework',
            '_workingstepmistake.rework.input.help': 'please enter number of mistakes',
            '_remainingPoints': 'remaining points',
            '_remainingPoints.construction': 'construction',
            '_remainingPoints.production': 'production',
            '_remainingPoints.byDelivery': 'by delivery',
            '_remainingPoints.construction.input.help': 'please enter construction value',
            '_remainingPoints.production.input.help': 'please enter production value',
            '_remainingPoints.byDelivery.input.help': 'please enter byDelivery value',
            '_remainingPoints.mistakes.per.cabinet': 'mistakes per catranslateProviderbinet',
            '_month': 'month',
            '_year': 'year',
            '_january': 'january',
            '_february': 'february',
            '_march': 'march',
            '_april': 'april',
            '_may': 'may',
            '_june': 'june',
            '_july': 'july',
            '_august': 'august',
            '_september': 'september',
            '_october': 'october',
            '_november': 'november',
            '_december': 'december',
            '_calendar.week': 'calendar week',
            '_data.already.existing.month': 'data already existing for this month in the year',
            '_data.already.existing.projectnumber': "data already existing for this projectnumber",
            '_data.already.existing.calendar.week': "data already existing for this calendar week",
            '_wish.update.data': "Do you wish to replace the data?",
            '_upstream.process.mistakes': 'upstream process mistakes',
            '_upstream.process.mistakes.headline': 'upstream process / BU´s mistakes',
            '_upstream.process.mistakes.percent': 'percent %',
            '_upstream.process.mistakes.percent.input.help': 'please enter the percentage value between 0 and 100',
            '_upstream.process.mistakes.quality': 'quality %',
            '_upstream.process.mistakes.actual': 'actual %',
            '_upstream.process.mistakes.target': 'target %',
            '_portfolio': 'portfolio',
            '_portfolio.title': 'number of switch cabinets in production',
            '_portfolio.input.help': 'please enter the value for the portfolio',
            '_labour.productivity': 'labour productivity',
            '_labour.productivity.avg.employee': 'Average number of employees',
            '_labour.productivity.avg.employee.input.help': 'please enter the average number of employees',
            '_labour.productivity.completed.cabinets': 'completed cabinets',
            '_labour.productivity.completed.cabinets.input.help': 'please enter the number of completed cabinets of the year',
            '_labour.productivity.yAxis.title': 'switch cabinets per employee',
            '_scrapped.material': 'scrapped material',
            '_scrapped.material.cost': 'cost €',
            '_scrapped.material.cost.input.help': 'please enter the value for the cost',
            '_delivery.reliability.logistics': 'delivery reliability logistics ',
            '_delivery.reliability.logistics.number.commissioning.trolleys': 'number commissioning trolleys',
            '_delivery.reliability.logistics.number.commissioning.trolleys.input.help': 'please enter the absolute number of commissioning trolleys',
            '_delivery.reliability.logistics.number.incomplete.commissioning.trolleys': 'number complete commissioning trolleys',
            '_delivery.reliability.logistics.number.incomplete.commissioning.trolleys.input.help': 'please enter the procentual number of completed commissioning trolleys',
            '_delivery.reliability.logistics.deviation.in.days': 'deviation in days',
            '_delivery.reliability.logistics.deviation.in.days.input.help': 'please enter value for deviation in days',
            '_delivery.reliability.logistics.title': 'number commissionings',
            '_capacity': 'capacity',
            '_capacity.title': 'capacity in the production',
            '_capacity.percent': 'percentage capacity',
            '_capacity.percent.input.help': 'please enter the value for the percentage capacity(50%-150%)',
            '_ideas.process.improvements': 'ideas process improvements',
            '_ideas.process.improvements.number.ideas': 'number of ideas',
            '_ideas.process.improvements.ideas.overall': 'Ideas overall',
            '_ideas.process.improvements.ideas.overall.input.help': 'please enter the number of all ideas ',
            '_ideas.process.improvements.implemented.ideas': 'implemented ideas',
            '_ideas.process.improvements.implemented.ideas.input.help': 'please enter the number of the implemented ideas',
            '_processing.time': 'processing time',
            '_processing.time.title': 'processingtimes',
            '_processing.time.ready.for.inspection': 'ready for inspection',
            '_processing.time.ready.for.inspection.input.help': 'please enter ready for inspection value',
            '_processing.time.remaining.points.finished': 'remaining points finished',
            '_processing.time.remaining.points.finished.input.help': 'please enter remaining points finished value',
            '_processing.time.delivered': 'delivered',
            '_processing.time.delivered.input.help': 'please enter delivered value',
            '_presentation.interval': 'presentation interval',
            '_presentation.interval.input.help': 'please enter time in seconds for the interval',
            '_send.option.to.server': 'Send to Server',
            '_send.option.to.server.input.help': 'sends the options to the server',
            '_get.server.updates': 'get option updates from the server',
            '_options.updates': 'options updates',
            '_options.send.to.server': 'sending options to server',
            '_succesfully.changed.in': 'succesfully changed in',
            '_succesfully.send': 'succesfully send',
            '_seconds': " seconds",
            '_admin.password': 'admin password',
            '_admin.password.new': 'new admin password',
            '_admin.password.new.info': 'create new admin password',
            '_admin.password.repeat': 'admin password repeat',
            '_admin.password.old': 'old admin password',
            '_admin.password.enter': 'please enter admin password',
            '_number.produced.cabinets': 'number produced cabinets',
            '_number.produced.cabinets.actual': 'actual number produced cabinets',
            '_number.produced.cabinets.actual.input.help': 'please enter the total number of produced cabinets for this year',
            '_number.produced.cabinets.target': 'target number produced cabinets',
            '_number.produced.cabinets.target.input.help': 'please enter the number to be reached produeced cabinets for the year. This value can only be enter one time in a year',
            '_delivery.reliability.upstream.construction': 'delivery reliability upstream construction',
            '_delivery.reliability.upstream.construction.deviation.in.days': 'deviation in days',
            '_delivery.reliability.upstream.construction.deviation.in.days.input.help': 'please enter the deviation in days',
            '_under.target': 'under target',
            '_in.target': 'in target',
            '_over.target': 'over target',
            '_actual': 'actual',
            '_target': 'target',
            '_actual.last': 'actual last',
            '_target.for': 'target for',
            '_months': 'months',
            '_aspiration': 'aspiration',
            '_yearly.average.target': 'target yearly average',
            '_yearly.average.actual': 'actual yearly average',
            '_average.value.calendar.year': 'average of the<br>calendar year ',
            '_average.cost': 'average cost',
            '_target.delivered': 'target delivered',
            '_target.remainingpoints.done': 'target remainingpoints<br>done',
            '_target.ready.for.inspection': 'target ready<br>for inspection',
            '_target.value': 'target value',
            '_target.deviation.range': 'target deviation range',
            '_average': 'average'
        });
        $translateProvider.preferredLanguage('de');
        $translateProvider.useCookieStorage();
    }
]);

angular.module('app').controller('AppCtrl', [
    'Console',
    '$translate',
    '$rootScope',
    '$cookieStore',
    '$location',
    '$timeout',
    '$scope',
    '$http',
    '$filter',
    function(
        Console,
        $translate,
        $rootScope,
        $cookieStore,
        $location,
        $timeout,
        $scope,
        $http,
        $filter
    ) {
        Console.group("AppController entered");
        //The value for the Login Modal Loginbutton
        $scope.loginButtonValue = "Login";
        //The Text for the nav login field
        $scope.loginText = "Login";
        //state if the admin is logged in
        $scope.loginstate = false;
        //init the adminpassword
        $scope.data = {
            adminPassword: ""
        };
        //status text for login modal
        $scope.loginstatus = "";
        //css class value for nav-login
        $scope.navLogin = "";
        //init the index for the routchange Array operatingNumbersOptions
        $rootScope.index = 0;
        clearInterval($scope.interval);
        //init startButton
        $rootScope.startButton = "";
        $rootScope.locale = $cookieStore.get("sirius.locale");
        //init interval with 20 seconds
        $rootScope.intervalTime = 20000;
        //set options update from server to true
        $rootScope.optionsUpdates = {
            value: true
        };


        //The path to the correct smiley picture
        $rootScope.smileyPicturePath = "/assets/img/smileyYellow.svg";

        $scope.focusInput = false;
        //init the routes and active state
        $rootScope.operatingNumbersOptions = [{
            route: "/remainingPoints",
            active: true
        }, {
            route: "/workingstepmistakes",
            active: true
        }, {
            route: "/upstreamprocessmistakes",
            active: true
        }, {
            route: "/portfolio",
            active: true
        }, {
            route: "/labourproductivity",
            active: true
        }, {
            route: "/scrappedmaterial",
            active: true
        }, {
            route: "/deliveryreliabilitylogistics",
            active: true
        }, {
            route: "/processingtime",
            active: true
        }, {
            route: "/capacity",
            active: true
        }, {
            route: "/ideasprocessimprovements",
            active: true
        }, {
            route: "/customersatisfaction",
            active: true
        }, {
            route: "/numberproducedcabinets",
            active: true
        }, {
            route: "/deliveryreliabilityupstreamconstruction",
            active: true
        }];
        //by loading checking if there is a valid cookie
        $http({
            method: "GET",
            url: '/security/'
        }).
        success(function(data) {
            if (!data.error) {
                console.debug("data", data);
                if (data.pwcheck) {
                    //auth cookie is valid
                    $scope.setNavLoginTrue();
                } else {
                    //auth cookie is not valid
                    $scope.setNavLoginFalse();
                }
            }
        });
        //sets the smileyvalue
        $rootScope.setSmileyValue = function(value) {

            if (value > 0 || value < 4) {
                switch (value) {
                    case 1:
                        $rootScope.smileyPicturePath = "/assets/img/smileyGreen.svg";
                        break;
                    case 2:
                        $rootScope.smileyPicturePath = "/assets/img/smileyYellow.svg";
                        break;
                    case 3:
                        $rootScope.smileyPicturePath = "/assets/img/smileyRed.svg";
                        break;
                    default:
                        $rootScope.smileyPicturePath = "/assets/img/smileyYellow.svg";
                }
            }
        };
        //if the auth Cookie is valid. Admin is logged in
        $scope.setNavLoginTrue = function() {
            $scope.loginText = "admin";
            $scope.loginButtonValue = "Logout";
            $scope.loginstate = true;
        };

        // if the auth Cookie is not valid. User have to log in
        $scope.setNavLoginFalse = function() {
            $scope.loginText = "login";
            $scope.loginButtonValue = "Login";
            $scope.loginstate = false;
        };

        //checks if there is one route true. So there is no endless loop
        $scope.checkIfOneTrue = function() {
            for (var i = 0; i < $rootScope.operatingNumbersOptions.length; i++) {
                if ($rootScope.operatingNumbersOptions[i].active) {
                    return true;
                }
            }
            console.debug("there is no one true");
            return false;
        };

        //sets the index for the Routechange.
        $rootScope.setOperatingNumberOptionIndex = function(index) {
            //console.debug("setting rootscope index to: " + index)
            $rootScope.index = index;
        };

        //change Lang
        $scope.changeLang = function(key) {
            $cookieStore.put("glx_operating_numbers.locale", key);
            $rootScope.locale = key;
            $rootScope.$broadcast("event:changeLang");
            $translate.uses(key);
            $("#login_dropdown_box").removeClass("open");
        };

        $scope.changeLang("de");

        // generate the Options Object
        $rootScope.makeOptionsObject = function() {
            var optionsObject = {
                "remainingpoints": $rootScope.operatingNumbersOptions[0].active,
                "workingstepmistakes": $rootScope.operatingNumbersOptions[1].active,
                "upstreamprocessmistakes": $rootScope.operatingNumbersOptions[2].active,
                "portfolio": $rootScope.operatingNumbersOptions[3].active,
                "labourproductivity": $rootScope.operatingNumbersOptions[4].active,
                "scrappedmaterial": $rootScope.operatingNumbersOptions[5].active,
                "deliveryreliabilitylogistics": $rootScope.operatingNumbersOptions[6].active,
                "processingtime": $rootScope.operatingNumbersOptions[7].active,
                "capacity": $rootScope.operatingNumbersOptions[8].active,
                "ideasprocessimprovements": $rootScope.operatingNumbersOptions[9].active,
                "customersatisfaction": $rootScope.operatingNumbersOptions[10].active,
                "presentationinterval": $rootScope.intervalTime,
                "numberproducedcabinets": $rootScope.operatingNumbersOptions[11].active,
                "deliveryreliabilityupstreamconstruction": $rootScope.operatingNumbersOptions[12].active
            };
            return optionsObject;
        };

        //get the Options from the server and map them to the locale options
        $rootScope.getOptionsFromServer = function() {
            $http({
                method: "GET",
                url: '/options/'
            }).
            success(function(data) { 
                  
                if (!data.error) {
                    Console.debug("data", data);
                    $rootScope.operatingNumbersOptions[0].active = data.options[0].remainingpoints;
                    $rootScope.operatingNumbersOptions[1].active = data.options[0].workingstepmistakes;
                    $rootScope.operatingNumbersOptions[2].active = data.options[0].upstreamprocessmistakes;
                    $rootScope.operatingNumbersOptions[3].active = data.options[0].portfolio;
                    $rootScope.operatingNumbersOptions[4].active = data.options[0].labourproductivity;
                    $rootScope.operatingNumbersOptions[5].active = data.options[0].scrappedmaterial;
                    $rootScope.operatingNumbersOptions[6].active = data.options[0].deliveryreliabilitylogistics;
                    $rootScope.operatingNumbersOptions[7].active = data.options[0].processingtime;
                    $rootScope.operatingNumbersOptions[8].active = data.options[0].capacity;
                    $rootScope.operatingNumbersOptions[9].active = data.options[0].ideasprocessimprovements;
                    $rootScope.operatingNumbersOptions[10].active = data.options[0].customersatisfaction;
                    $rootScope.operatingNumbersOptions[11].active = data.options[0].numberproducedcabinets;
                    $rootScope.operatingNumbersOptions[12].active = data.options[0].deliveryreliabilityupstreamconstruction;
                    if ($rootScope.intervalTime !== data.options[0].presentationinterval) {
                        $rootScope.intervalTime = data.options[0].presentationinterval;
                        $rootScope.endRouteChange();
                        $rootScope.startRouteChange();
                    } else {
                        $rootScope.intervalTime = data.options[0].presentationinterval;
                    } 

                }
            });
        };

        //send the Options to the server.
        // method POST will try to save a record when no datarecord exists.
        // methods PUT will update a data record
        $rootScope.sendOptionsToServer = function(method) {
            Console.debug("Sending Options to Server");
            $http({
                url: '/options/',
                method: method,
                data: $rootScope.makeOptionsObject()
            }).success(function(data, status, headers, config) {
                console.debug("data", data);
            }).error(function(data, status, headers, config) {
                Console.debug(status);
                Console.debug(data);
                switch (status) {
                    //data not modified
                    case 304:
                        //console.debug("data not modified")
                        break;
                        //updating data failed
                    case 305:
                        Console.debug("data: ", data, "status: ", status);
                        Console.debug("updating data failed: No Document found, or more than one found");
                        break;
                    default:
                        Console.debug("data: ", data, "status: ", status);
                }
            });
        };

        $rootScope.getClass = function(path) {
            if ($location.path().substr(0, path.length) === path) {
                return "active";
            } else {
                return "";
            }
        };

        //init the route change for the Präsentation
        $rootScope.startRouteChange = function() {
            // console.log("starting rout changes");
            $rootScope.startButton = "active";
            $rootScope.changeRoute();
        };

        // the logic for the routchangediashow
        $rootScope.changeRoute = function() {
            if ($scope.interval) {
                clearInterval($scope.interval);
            }
            $scope.interval = setInterval(function() {
                $scope.$apply(function() {
                    //Try only when one route is active. so there is no endless loop
                    if ($scope.checkIfOneTrue()) {
                        if ($rootScope.index >= $rootScope.operatingNumbersOptions.length) {
                            $rootScope.index = 0;
                            if ($rootScope.optionsUpdates.value) {
                                $rootScope.getOptionsFromServer();
                            }
                        }
                        for (; !$rootScope.operatingNumbersOptions[$rootScope.index].active;) {
                            if ($rootScope.index >= ($rootScope.operatingNumbersOptions.length - 1)) {
                                $rootScope.index = 0;
                                if ($rootScope.optionsUpdates.value) {
                                    $rootScope.getOptionsFromServer();
                                }
                            } else {
                                $rootScope.index++;
                            }
                        }
                        $location.path($rootScope.operatingNumbersOptions[$rootScope.index].route);
                        $rootScope.index++;
                    }
                });
            }, $rootScope.intervalTime);
        };

        // clears the intervall for the route change
        $rootScope.endRouteChange = function() {
            clearInterval($scope.interval);
            $rootScope.startButton = "";
            //   console.log("ending Rout change");
        };

        // trys to login with the admin password
        $rootScope.login = function(pw) {
            if ($scope.loginstate) {
                //logout if the user is already logged in
                setCookie("auth", "", -1);
                //console.debug("try to close modeal");
                $('#loginModal').modal('hide');
                $scope.setNavLoginFalse();
            } else {
                //clears the adminPassword
                $scope.data.adminPassword = "";
                //console.debug("pw", pw);
                var getObject = {
                    actualPassword: pw
                };
                $http({
                    method: "POST",
                    url: '/security/',
                    data: getObject
                }).
                success(function(data) {
                    //pwcheck is true when no admin password is set or the admin password was correct.
                    if (data.pwcheck) {
                        //if there is a admin password, the cookie is not empty
                        if (data.cookie) {
                            //Console.debug("Cookie was not empty");
                            setCookie("auth", data.cookie, 7);
                            $scope.loginstatus = "Sucessfully login!";
                            $scope.setNavLoginTrue();
                            $timeout(function() {
                                $scope.loginstatus = "";
                                $('#loginModal').modal('hide');
                            }, 1000);
                        } else {
                            //Console.debug("Cookie was empty");
                            $scope.loginstatus = "there is no admin password! please create one";
                            $timeout(function() {
                                $scope.loginstatus = "";
                            }, 5000);
                        }
                    } else {
                        //Console.debug("Password was not correct")
                        $scope.loginstatus = "password was not correct";
                        $timeout(function() {
                            $scope.loginstatus = "";
                        }, 5000);
                    }
                });
            }
        };
        $(document).ready(function() {
            $('loginbuttonid').keypress(function(e) {
                if (e.keyCode === 13) {
                    console.debug("enter");
                }
            });
        });

        //set a cookie

        function setCookie(c_name, value, exdays) {
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + exdays);
            var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = c_name + "=" + c_value;
        }

        //starts automatically the presentation
        $rootScope.startRouteChange();
        //sends the options to the server. the server will accept them only when there are no Datarecord with option.
        $rootScope.sendOptionsToServer('POST');
        $rootScope.getOptionsFromServer();


        // Highcharts Theme init
        Highcharts.theme = {

            exporting: {
                enabled: false
            },
            colors: ['#B10024',
                '#EE8D00',
                '#FFE400',
                '#008AD9',
                '#C9D200',
                '#4B0459',
                '#002043',
                '#204333'
            ],
            title: {
                style: {
                    fontFamily: '\'Lato\', sans-serif',
                    lineHeight: '26px',
                    fontSize: '35px'
                }
            },
            subtitle: {
                style: {
                    color: '#666666',
                    fontFamily: 'bold 12px "Trebuchet MS", Verdana, sans-serif',
                    fontSize: '15px'
                }
            },
            xAxis: {
                labels: {
                    y: 25,
                    style: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '23px',
                        fontFamily: '25px Arial'
                    }
                },
                title: {
                    style: {
                        color: '#008AD9',
                        fontWeight: 'bold',
                        fontSize: '27px',
                        fontFamily: 'Arial'
                    }
                }
            },
            yAxis: {
                labels: {
                    style: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: '23px',
                        fontFamily: '25px Arial'
                    }
                },
                title: {
                    style: {
                        color: '#008AD9',
                        fontWeight: 'bold',
                        fontSize: '27px',
                        fontFamily: 'Arial'
                    }
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                        style: {
                            fontFamily: '\'Lato\', sans-serif',
                            fontSize: '22px'
                        }
                    },
                    enableMouseTracking: false
                },
                series: {
                    lineWidth: 4
                }
            }
        };

        // Apply the theme
        var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

        Console.groupEnd(); // .controller
    }
]);

angular.module('datainput.capacity', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/datainput-capacity', {
        templateUrl: 'datainput/capacity.tpl.html',
        controller: 'DataInputCapacityController'
      });
    }
  ])
  .controller('DataInputCapacityController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$compile',
    '$location',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $compile,
      $location

    ) {
      Console.group("DataInputCapacityController entered.");


       //sets ngDisable to false(submitbutton is enabled!)
        $scope.submitDisabled = false;
        //init the submit Button color (red )
        $scope.buttonstate = "btn btn-danger";
        //init the input values
        $scope.data = {
          percent:""
        };

        //init the dataState with all false.
        //The data can only submitted if all true
        $scope.datastate = {
          'percent': false,
          'calendarWeek': false
        };
        //init the text for the dropdown menus
        $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');
        // get the values from the server for the dropdowns
        $http({
          method: "GET",
          url: '/capacity/inputdata/'
        }).
        success(function(data) {
          if (!data.error) {
            Console.debug("data", data);
            $scope.inputData = data;
            $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();

          }
        });
        /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
        //set the smiley values: 2 is default(Yellow colour) and updateKey
        $scope.smiley = {
          value: 2,
          updateKey: 4
        };
        //change the smiley value
        $scope.changeSmileyValue = function(value) {
          if (value >= 1 && value <= 3) {
            $scope.smiley.value = value;
          } else {
            $scope.smiley.value = 2;
          }
        };
        //sends the smileyvalue to server
        $scope.submitSmileyValue = function() {
          var postObject = {
            "updateValue": $scope.smiley.value,
            "updateKey": $scope.smiley.updateKey
          };
          $http({
            url: 'smiley/',
            method: 'POST',
            data: postObject
          }).success(function(data, status, headers, config) {
            //console.debug("DatainputCapacity smileyvalue sending to server");
          }).error(function(data, status, headers, config) {
            Console.debug("ErroR submitSmileyValue:status:", status);
            Console.debug(data);
          });
        };

        // The drop down calendarweek change menu  function
        $scope.setDropdownCalendarWeekValue = function(value) {
          $scope.dropdownCalendarWeekText = value;
          $scope.dropDownCalendarWeekValue = value;
          $scope.datastate.calendarWeek = true;
          $scope.checkIfAllTrue();
        };

        //if the input Capacity data changed
        $scope.checkPercentInput = function() {
          $scope.data.percent = $scope.data.percent.replace(",", ".");
          //Test for numeric and positive value
          if ($.isNumeric($scope.data.percent) && $scope.data.percent >= 50 && $scope.data.percent <= 150) {
            $scope.datastate.percent = true;
            //Console.debug("percent IS NUMERIC");
          } else {
            $scope.datastate.percent = false;
            //Console.debug("percent IS NOT NUMERIC");
          }
          $scope.checkIfAllTrue();
        };

        //returns false if one input field are empty or false
        $scope.checkIfAllTrue = function() {
          var temp = true;
          _.each($scope.datastate, function(value) {
            if (!value) {
              temp = false;
            }
          });
          if (temp) {
            $scope.makeButtonSuccess();
            return true;
          } else {
            $scope.makeButtonWarning();
            return false;
          }
        };

        //only for debug
        $scope.printData = function() {
          Console.debug("Portfolio: " + $scope.data.portfolio);
          Console.debug("calendarweek value: " + $scope.dropDownCalendarWeekValue);
        };

        //Delete the form for response
        $scope.clearForm = function() {
          $("#datainputform").remove();
        };

        //Creates the view if the Data successfully submitted and shows the values
        $scope.createResponseView = function() {
          //creates a date from the milliseconds
          $scope.responsedata.date = new Date($scope.responsedata.date);
          $scope.noUpdateData();
          $scope.dataResponseTemplate = {
            name: 'remainingPointsResponse.html',
            url: 'assets/datainputresponse/capacityResponse.html'
          };
        };

        // change the route to the main datainput page
        $scope.backToDataInput = function() {
          $location.path("/datainput");
        };

        // function if the submitbutton is clicked
        // calls data check functions
        // sends the data to the server if erverything is ok
        $scope.submit = function(method) {
          if ($scope.checkIfAllTrue()) {
            //Preventing Double  Submission
            $scope.submitDisabled = true;
            var postObject = {
              "percent": $scope.data.percent,
              "note": $scope.data.note,
              "calendarWeek": $scope.dropDownCalendarWeekValue
            };
            $http({
              url: 'capacity/',
              method: method,
              data: postObject
            }).success(function(data, status, headers, config) {

              $scope.clearForm();
              $scope.responsedata = data;
              $scope.responsedata.month = $filter('translate')('_' + data.month);
              //sends the smileyValue to the server
              $scope.submitSmileyValue();
              $scope.createResponseView();

            }).error(function(data, status, headers, config) {
              Console.debug(status);
              Console.debug(data);
              switch (status) {
                case 304:
                  $scope.status = $filter('translate')('_data.already.existing.month');
                  $scope.updateTemplate = {
                    name: 'update.html',
                    url: 'assets/update/update.html'
                  };
                  break;
                case 305:
                  Console.debug("data: ", data, "status: ", status);
                  Console.debug("updating data failed: No Document found, or more than one found");
                  $scope.noUpdateData();
                  $scope.status = "Data updating failed";
                  break;
                default:
                  $scope.status = "Fehlermeldung nicht vorhanden";
              }
            });
          } else {
            alert("something wrong or something missing");
          }

        };

        //if the user doesen't update the data
        $scope.noUpdateData = function() {
          $scope.status = null;
          $scope.updateTemplate = null;
        };
        //button turns green
        $scope.makeButtonSuccess = function() {
          $scope.buttonstate = "btn btn-success";
        };
        //button turns red
        $scope.makeButtonWarning = function() {
          $scope.buttonstate = "btn btn-danger";
        };
      Console.groupEnd();
    }
  ]);
angular.module('datainput.customersatisfaction', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-customersatisfaction', {
                templateUrl: 'datainput/customersatisfaction.tpl.html',
                controller: 'DataInputCustomerSatisfactionController'
            });
        }
    ])
    .controller('DataInputCustomerSatisfactionController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputCustomerSatisfactionController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the input values
            $scope.data = {
                customersatisfaction: "",
                customername: "",
                projectnumber: ""
            };


            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.dataState = {
                'customername': false,
                'customersatisfaction': false,
                'projectnumber': false,
                'year': false,
                'month': false
            };
            //init the dropdown texts
            $scope.dropdownYearText = $filter('translate')('_year');
            $scope.dropdownMonthText = $filter('translate')('_month');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/customerSatisfaction/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 1
            };
            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };
            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {

                }).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };
            //check the Customersatisfaction input (must be between 1 and 5)
            $scope.checkCustomerSatisfactionInput = function() {
                if ($scope.data.customersatisfaction.indexOf(',') > -1) {
                    $scope.data.customersatisfaction = $scope.data.customersatisfaction.replace(",", "");
                }

                if ($scope.data.customersatisfaction.indexOf('.') > -1) {
                    $scope.data.customersatisfaction = $scope.data.customersatisfaction.replace(".", "");
                }


                if ($.isNumeric($scope.data.customersatisfaction) &&
                    $scope.data.customersatisfaction >= 1 &&
                    $scope.data.customersatisfaction <= 5) {
                    $scope.dataState.customersatisfaction = true;
                } else {
                    $scope.dataState.customersatisfaction = false;
                }
                $scope.checkIfAllTrue();
            };

            // check if the customername data is vailid
            $scope.checkCustomernameInput = function() {
                if ($scope.data.customername.length > 0) {
                    $scope.dataState.customername = true;
                } else {
                    $scope.dataState.customername = false;
                }
                $scope.checkIfAllTrue();
            };

            // check if the projectnumber data is vailid
            $scope.checkProjectnumberInput = function() {
                if ($scope.data.projectnumber.length > 0) {
                    $scope.dataState.projectnumber = true;
                } else {
                    $scope.dataState.projectnumber = false;
                }
                $scope.checkIfAllTrue();
            };
            // function if the Year Dropdown is clicked
            $scope.setDropdownYearValue = function(value) {
                $scope.dropdownYearValue = value;
                $scope.dataState.year = true;
                $scope.dropdownYearText = value;
                $scope.checkIfAllTrue();
            };
            // function if the Month Dropdown is clicked
            $scope.setDropdownMonthValue = function(value) {
                $scope.dropdownMonthValue = value;
                $scope.dataState.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + value);
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.dataState, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //deletes the data input form after the data is send to the server
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'customerSatisfactionResponse.html',
                    url: 'assets/datainputresponse/customerSatisfactionResponse.html'
                };
            };

            $scope.printData = function(){
            
            console.debug("Kundenzufriedenheit: ", $scope.data.customersatisfaction );
            console.debug("Kundenname: ", $scope.data.customername );
            console.debug("Projektnummer: ", $scope.data.projectnumber );
            console.debug("Jahr: ",  $scope.dropdownYearValue );
            console.debug("Monat: ", $scope.dropdownMonthValue );
            console.debug("Datastate-customername: ",  $scope.dataState.customername );
            console.debug("Datastate-customersatisfaction: ",  $scope.dataState.customersatisfaction );
            console.debug("Datastate-projectnumber: ",  $scope.dataState.projectnumber );
            console.debug("Datastate-year: ",  $scope.dataState.year );
            console.debug("Datastate-month: ",  $scope.dataState.month );
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is clicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                //$scope.printData();
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "customername": $scope.data.customername,
                        "satisfaction": String($scope.data.customersatisfaction),
                        "projectnumber": $scope.data.projectnumber,
                        "year": $scope.dropdownYearValue,
                        "month": $scope.dropdownMonthValue,
                        "note": $scope.data.note
                    };
                    $http({
                        url: 'customerSatisfaction/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        switch (status) {
                            // DATA NOT MODIFIED
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.projectnumber');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //Updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                                // no acces please login
                            case 333:
                                alert("please login");
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                  //  $scope.dataState.customersatisfaction = false;
                  //  $scope.makeButtonWarning();
                } else {
                    alert("Bitte Daten korrekt eingeben");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;

            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput', ['datainput.customersatisfaction','datainput.capacity','datainput.deliveryreliabilityupstreamconstruction','datainput.deliveryreliabilitylogistics','datainput.processingtime','datainput.ideasprocessimprovements','datainput.labourproductivity','datainput.numberproducedcabinets','datainput.portfolio','datainput.remainingpoints','datainput.scrappedmaterial','datainput.upstreamprocessmistakes','datainput.workingstepmistakes'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/datainput', {
        templateUrl: 'datainput/datainput.tpl.html',
        controller: 'DataInputController'
      });
    }
  ])
  .controller('DataInputController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$compile',
    '$location',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $compile,
      $location

    ) {
      Console.group("DataInputController entered.");

      $scope.goToDataDelete = function() {
        $location.path("/delete");
      };

      Console.groupEnd();
    }
  ]);
angular.module('datainput.deliveryreliabilitylogistics', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-deliveryreliabilitylogistics', {
                templateUrl: 'datainput/deliveryreliabilitylogistics.tpl.html',
                controller: 'DataInputDeliveryReliabilityLogisticsController'
            });
        }
    ])
    .controller('DataInputDeliveryReliabilityLogisticsController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputDeliveryReliabilityLogisticsController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the input values

            $scope.data = {
                numberCommissioningTrolleys: "",
                numberIncompleteCommissioningTrolleys: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'numberCommissioningTrolleys': false,
                'numberIncompleteCommissioningTrolleys': false,
                'calendarWeek': false
            };
            //init the text for the dropdown menus
            $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');
            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/deliveryreliabilitylogistics/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                    $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();

                }
            });
            /*
          updateKey: 1 Customersatisfaction
          updateKey: 2 Deliveryreliabilitylogistics
          updateKey: 3 ideasprocessimprovements
          updateKey: 4 Capacity
          updateKey: 5 Labourproductivity
          updateKey: 6 Portfolio
          updateKey: 7 ProcessingTime
          updateKey: 8 Remainingpoints
          updateKey: 9 scrappedmaterial
          updateKey: 10 Upstreamprrocessmistakes
          updateKey: 11 workingsstepmistakes
          updateKey: 12 NumberPrdoducedCabinets
          updateKey: 13 DeliveryReliabilityUpstreamConstruction
          */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 2
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            // The calendarweek drop down menu change function
            $scope.setDropdownCalendarWeekValue = function(value) {
                $scope.dropdownCalendarWeekText = value;
                $scope.dropDownCalendarWeekValue = value;
                $scope.datastate.calendarWeek = true;
                $scope.checkIfAllTrue();
            };



            //if the  data changed
            $scope.checkNumberCommissioningTrolleysInput = function() {
               if ($scope.data.numberCommissioningTrolleys.indexOf(',') > -1) {
                $scope.data.numberCommissioningTrolleys = $scope.data.numberCommissioningTrolleys.replace(",", ".");
              }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.numberCommissioningTrolleys) &&
                    $scope.data.numberCommissioningTrolleys >= 0) {
                    $scope.datastate.numberCommissioningTrolleys = true;
                    //Console.debug("numberCommissioningTrolleys IS NUMERIC");
                } else {
                    $scope.datastate.deviationInDays = false;
                    //Console.debug("numberCommissioningTrolleys IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the  data changed
            $scope.checkNumberIncompleteCommissioningTrolleysInput = function() {
               if ($scope.data.numberIncompleteCommissioningTrolleys.indexOf(',') > -1) {
                $scope.data.numberIncompleteCommissioningTrolleys = $scope.data.numberIncompleteCommissioningTrolleys.replace(",", ".");
              }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.numberIncompleteCommissioningTrolleys) &&
                    $scope.data.numberIncompleteCommissioningTrolleys >= 0) {
                    $scope.datastate.numberIncompleteCommissioningTrolleys = true;
                    Console.debug("numberIncompleteCommissioningTrolleys IS NUMERIC");
                } else {
                    $scope.datastate.numberIncompleteCommissioningTrolleys = false;
                    Console.debug("numberIncompleteCommissioningTrolleys IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty or false
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("numberCommissioningTrolleys: " + $scope.data.numberCommissioningTrolleys);
                Console.debug("numberIncompleteCommissioningTrolleys: " + $scope.data.numberIncompleteCommissioningTrolleys);
                Console.debug("calendarweek value: " + $scope.dropDownCalendarWeekValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/deliveryReliabilityLogisticsResponse.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "numberCommissioningTrolleys": $scope.data.numberCommissioningTrolleys,
                        "numberIncompleteCommissioningTrolleys": $scope.data.numberIncompleteCommissioningTrolleys,
                        "note": $scope.data.note,
                        "calendarWeek": $scope.dropDownCalendarWeekValue
                    };
                    $http({
                        url: 'deliveryreliabilitylogistics/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modifed -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter values correct!");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.deliveryreliabilityupstreamconstruction', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-deliveryreliabilityupstreamconstruction', {
                templateUrl: 'datainput/deliveryreliabilityupstreamconstruction.tpl.html',
                controller: 'DataInputDeliveryReliabilityUpstreamConstructionController'
            });
        }
    ])
    .controller('DataInputDeliveryReliabilityUpstreamConstructionController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputCustomerSatisfactionController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'deviationInDays': false,
                'calendarWeek': false
            };

            $scope.data = {
                deviationInDays: ""
            };
            //init the text for the dropdown menus
            $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');
            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/deliveryreliabilityupstreamconstruction/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                    $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();
                }
            });
            /*
            updateKey: 1 Customersatisfaction
            updateKey: 2 Deliveryreliabilitylogistics
            updateKey: 3 ideasprocessimprovements
            updateKey: 4 Capacity
            updateKey: 5 Labourproductivity
            updateKey: 6 Portfolio
            updateKey: 7 ProcessingTime
            updateKey: 8 Remainingpoints
            updateKey: 9 scrappedmaterial
            updateKey: 10 Upstreamprrocessmistakes
            updateKey: 11 workingsstepmistakes
            updateKey: 12 NumberPrdoducedCabinets
            updateKey: 13 DeliveryReliabilityUpstreamConstruction
            */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 13
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            // The calendarweek drop down menu change function
            $scope.setDropdownCalendarWeekValue = function(value) {
                $scope.dropdownCalendarWeekText = value;
                $scope.dropDownCalendarWeekValue = value;
                $scope.datastate.calendarWeek = true;
                $scope.checkIfAllTrue();
            };

            //if the Portfolio data changed
            $scope.checkDeviationInDaysInput = function() {


                if ($scope.data.deviationInDays.indexOf(',') > -1) {
                    $scope.data.deviationInDays = $scope.data.deviationInDays.replace(",", "");
                }

                if ($scope.data.deviationInDays.indexOf('.') > -1) {
                    $scope.data.deviationInDays = $scope.data.deviationInDays.replace(".", "");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.deviationInDays)) {
                    $scope.datastate.deviationInDays = true;
                    //Console.debug("deviationInDays IS NUMERIC");
                } else {
                    $scope.datastate.deviationInDays = false;
                    //Console.debug("deviationInDays IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty or false
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }

            };

            //only for debug
            $scope.printData = function() {
                Console.debug("deviationInDays: " + $scope.data.deviationInDays);
                Console.debug("calendarweek value: " + $scope.dropDownCalendarWeekValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/dRUCResponse.html'
                };
            };
            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "deviationInDays": $scope.data.deviationInDays,
                        "note": $scope.data.note,
                        "calendarWeek": $scope.dropDownCalendarWeekValue
                    };
                    $http({
                        url: 'deliveryreliabilityupstreamconstruction/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();

                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //data not modified -> create update menu
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //Data update failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.ideasprocessimprovements', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-ideasprocessimprovements', {
                templateUrl: 'datainput/ideasprocessimprovements.tpl.html',
                controller: 'DataInputIdeasProcessImprovementsController'
            });
        }
    ])
    .controller('DataInputIdeasProcessImprovementsController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputIdeasProcessImprovementsController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the input values

            $scope.data = {
                overallIdeas: "",
                implementedIdeas: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'overallIdeas': false,
                'implementedIdeas': false,
                'month': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownMonthText = $filter('translate')('_month');
            $scope.dropdownYearText = $filter('translate')('_year');
            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/processingtime/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley)  and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 3
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownMonthValue = function(text) {
                $scope.datastate.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + text);
                $scope.dropdownMonthValue = text;
                $scope.checkIfAllTrue();
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the overall ideas data changed
            $scope.checkOverallIdeasInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.overallIdeas.indexOf(',') > -1) {
                    $scope.data.overallIdeas = $scope.data.overallIdeas.replace(",", "");
                }
                if ($scope.data.overallIdeas.indexOf('.') > -1) {
                    $scope.data.overallIdeas = $scope.data.overallIdeas.replace(".", "");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.overallIdeas) && $scope.data.overallIdeas >= 0) {
                    $scope.datastate.overallIdeas = true;
                    // Console.debug("overallIdeas IS NUMERIC");
                } else {
                    $scope.datastate.overallIdeas = false;
                    //Console.debug("overallIdeas IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the implemented ideas data changed
            $scope.checkImplementedIdeasInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.implementedIdeas.indexOf(',') > -1) {
                    $scope.data.implementedIdeas = $scope.data.implementedIdeas.replace(",", "");
                }
                if ($scope.data.implementedIdeas.indexOf('.') > -1) {
                    $scope.data.implementedIdeas = $scope.data.implementedIdeas.replace(".", "");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.implementedIdeas) && $scope.data.implementedIdeas >= 0) {
                    $scope.datastate.implementedIdeas = true;
                    Console.debug(" implementedIdeas IS NUMERIC");
                } else {
                    $scope.datastate.implementedIdeas = false;
                    Console.debug("implementedIdeas IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("overallIdeas: " + $scope.data.overallIdeas);
                Console.debug("remainingPointsFinished: " + $scope.data.remainingPointsFinished);
                Console.debug("delivered: " + $scope.data.delivered);
                Console.debug("month value: " + $scope.dropdownMonthValue);
                Console.debug("year value: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/ideasProcessImprovements.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "overallIdeas": $scope.data.overallIdeas,
                        "implementedIdeas": $scope.data.implementedIdeas,
                        "note": $scope.data.note,
                        "month": $scope.dropdownMonthValue,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'ideasprocessimprovements/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.labourproductivity', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-labourproductivity', {
                templateUrl: 'datainput/labourproductivity.tpl.html',
                controller: 'DataInputLabourProductivityController'
            });
        }
    ])
    .controller('DataInputLabourProductivityController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputLabourProductivityController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the input values
            $scope.data = {
                completedCabinets: "",
                avgEmployee: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'avgEmployee': false,
                'completedCabinets': false,
                'calendarWeek': false
            };

            //init the text for the dropdown menus
            $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/labourproductivity/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                    $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });

            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 5
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            // The calendarweek drop down menu change function
            $scope.setDropdownCalendarWeekValue = function(value) {
                $scope.dropdownCalendarWeekText = value;
                $scope.dropDownCalendarWeekValue = value;
                $scope.datastate.calendarWeek = true;
                $scope.checkIfAllTrue();
            };


            //if the average number of employee data changed
            $scope.checkAvgEmployeeInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.avgEmployee.indexOf(',') > -1) {
                    $scope.data.avgEmployee = $scope.data.avgEmployee.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.avgEmployee) && $scope.data.avgEmployee > 0) {
                    $scope.datastate.avgEmployee = true;
                    //Console.debug("avgEmployee IS NUMERIC AND POSITIVE");
                } else {
                    $scope.datastate.avgEmployee = false;
                    //Console.debug("avgEmployee IS NOT NUMERIC or not between 0 100");
                }
                $scope.checkIfAllTrue();
            };

            //if the completed cabinets data changed
            $scope.checkCompletedCabinetsInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.completedCabinets.indexOf(',') > -1) {
                    $scope.data.completedCabinets = $scope.data.completedCabinets.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.completedCabinets) && $scope.data.completedCabinets >= 0) {
                    $scope.datastate.completedCabinets = true;
                    //Console.debug("completedCabinets IS NUMERIC positive");
                } else {
                    $scope.datastate.completedCabinets = false;
                    //Console.debug("completedCabinets IS NOT NUMERIC or negative");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("completed cabinets: " + $scope.data.completedCabinets);
                Console.debug("month value: " + $scope.dropdownMonthValue);
                Console.debug("year value: " + $scope.dropdownYearValue);
                Console.debug("average employee" + $scope.data.avgEmployee);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/labourProductivity.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "avgEmployee": $scope.data.avgEmployee,
                        "completedCabinetsOfYear": $scope.data.completedCabinets,
                        "note": $scope.data.note,
                        "calendarWeek": $scope.dropDownCalendarWeekValue
                    };
                    $http({
                        url: 'labourproductivity/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modifed -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failöed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.numberproducedcabinets', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-numberproducedcabinets', {
                templateUrl: 'datainput/numberproducedcabinets.tpl.html',
                controller: 'DataInputNumberProducedCabinetsController'
            });
        }
    ])
    .controller('DataInputNumberProducedCabinetsController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputNumberProducedCabinetsController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init datainput values
            $scope.data = {
                actual: "",
                target: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'actual': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownYearText = $filter('translate')('_year');
            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/numberproducedcabinets/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 12
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the actual data changed
            $scope.checkActualInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.actual.indexOf(',') > -1) {
                    $scope.data.actual = $scope.data.actual.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.actual) && $scope.data.actual >= 0) {
                    $scope.datastate.actual = true;
                    //Console.debug("actual IS NUMERIC");
                } else {
                    $scope.datastate.actual = false;
                    //Console.debug("actual IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the target data changed
            $scope.checkTargetInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.target.indexOf(',') > -1) {
                    $scope.data.target = $scope.data.target.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.target) && $scope.data.target >= 0) {
                    $scope.datastate.target = true;
                    Console.debug(" target IS NUMERIC");
                } else {
                    $scope.datastate.target = false;
                    Console.debug("target IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("actual: " + $scope.data.actual);
                Console.debug("target: " + $scope.data.target);
                Console.debug("year value: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/numberProducedCabinets.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    if (!($.isNumeric($scope.data.target) && $scope.data.target >= 0)) {
                        $scope.data.target = 0;
                    }
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "target": $scope.data.target,
                        "actual": $scope.data.actual,
                        "note": $scope.data.note,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'numberproducedcabinets/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();

                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> cearte update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                                //special code for NumberProducedCabinets -> If a new year starts you have to set the produced cabinets target!
                            case 307:
                                alert('Erster Wert für das Jahr, Bitte die zu erreichende Anzahl gefertigter Schaltschränke für das Jahr eingeben ');
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.portfolio', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-portfolio', {
                templateUrl: 'datainput/portfolio.tpl.html',
                controller: 'DataInputPortfolioController'
            });
        }
    ])
    .controller('DataInputPortfolioController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputPortfolioController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;
            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init inputdata values

            $scope.data = {
                portfolio: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'portfolio': false,
                'calendarWeek': false
            };

            //init the text for the dropdown menus
            $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/portfolio/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                    $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();
                }
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 6
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            // The calendarweek drop down menu change function
            $scope.setDropdownCalendarWeekValue = function(value) {
                $scope.dropdownCalendarWeekText = value;
                $scope.dropDownCalendarWeekValue = value;
                $scope.datastate.calendarWeek = true;
                $scope.checkIfAllTrue();
            };

            //if the Portfolio data changed
            $scope.checkPortfolioInput = function() {
                if ($scope.data.portfolio.indexOf(',') > -1) {
                    $scope.data.portfolio = $scope.data.portfolio.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.portfolio) && $scope.data.portfolio >= 0) {
                    $scope.datastate.portfolio = true;
                    //Console.debug("portfolio IS NUMERIC");
                } else {
                    $scope.datastate.portfolio = false;
                    //Console.debug("portfolio IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty or false
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("Portfolio: " + $scope.data.portfolio);
                Console.debug("calendarweek value: " + $scope.dropDownCalendarWeekValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/portfolioResponse.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "portfolio": $scope.data.portfolio,
                        "note": $scope.data.note,
                        "calendarWeek": $scope.dropDownCalendarWeekValue
                    };
                    $http({
                        url: 'portfolio/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.processingtime', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-processingtime', {
                templateUrl: 'datainput/processingtime.tpl.html',
                controller: 'DataInputProcessingTimeController'
            });
        }
    ])
    .controller('DataInputProcessingTimeController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputProcessingTimeController entered.");

            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init datainput values
            $scope.data = {
                readyForInspection: "",
                remainingPointsFinished: "",
                delivered: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'readyForInspection': false,
                'remainingPointsFinished': false,
                'delivered': false,
                'month': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownMonthText = $filter('translate')('_month');
            $scope.dropdownYearText = $filter('translate')('_year');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/processingtime/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });

            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default(Yellow Smiley) and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 7
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownMonthValue = function(text) {
                $scope.datastate.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + text);
                $scope.dropdownMonthValue = text;
                $scope.checkIfAllTrue();
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the ready for inspection data changed
            $scope.checkReadyForInspectioninput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.readyForInspection.indexOf(',') > -1) {
                    $scope.data.readyForInspection = $scope.data.readyForInspection.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.readyForInspection) && $scope.data.readyForInspection >= 0) {
                    $scope.datastate.readyForInspection = true;
                    //Console.debug("readyForInspection IS NUMERIC");
                } else {
                    $scope.datastate.readyForInspection = false;
                    //Console.debug("readyForInspection IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the Remaininpoints data changed
            $scope.checkRemainingPointsFinishedInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.remainingPointsFinished.indexOf(',') > -1) {
                    $scope.data.remainingPointsFinished = $scope.data.remainingPointsFinished.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.remainingPointsFinished) && $scope.data.remainingPointsFinished >= 0) {
                    $scope.datastate.remainingPointsFinished = true;
                    //Console.debug(" remainingPointsFinished IS NUMERIC");
                } else {
                    $scope.datastate.remainingPointsFinished = false;
                    //Console.debug("remainingPointsFinished IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the delivered data changed
            $scope.checkDeliveredInput = function() {
                if ($scope.data.delivered.indexOf(',') > -1) {
                    $scope.data.delivered = $scope.data.delivered.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.delivered) && $scope.data.delivered >= 0) {
                    $scope.datastate.delivered = true;
                    // Console.debug(" delivered IS NUMERIC");
                } else {
                    $scope.datastate.delivered = false;
                    //Console.debug("delivered IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debuggin
            $scope.printData = function() {
                Console.debug("readyForInspection: " + $scope.data.readyForInspection);
                Console.debug("remainingPointsFinished: " + $scope.data.remainingPointsFinished);
                Console.debug("delivered: " + $scope.data.delivered);
                Console.debug("month value: " + $scope.dropdownMonthValue);
                Console.debug("year value: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/templates/datainputresponse/processingTimeResponse.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "readyForInspection": $scope.data.readyForInspection,
                        "remainingPointsFinished": $scope.data.remainingPointsFinished,
                        "delivered": $scope.data.delivered,
                        "note": $scope.data.note,
                        "month": $scope.dropdownMonthValue,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'processingtime/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update value
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };

            Console.groupEnd();
        }
    ]);
angular.module('datainput.remainingpoints', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-remainingpoints', {
                templateUrl: 'datainput/remainingpoints.tpl.html',
                controller: 'DataInputRemainingPointsController'
            });
        }
    ])
    .controller('DataInputRemainingPointsController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputRemainingPointsController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the datainput values
            $scope.data = {
                construction: "",
                production: "",
                byDelivery: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'construction': false,
                'production': false,
                'byDelivery': false,
                'month': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownMonthText = $filter('translate')('_month');
            $scope.dropdownYearText = $filter('translate')('_year');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/remainingpoints/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default, templateurl and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 8
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownMonthValue = function(text) {
                $scope.datastate.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + text);
                $scope.dropdownMonthValue = text;
                $scope.checkIfAllTrue();

            };
            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the construction data changed
            $scope.checkConstructionInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.construction.indexOf(',') > -1) {
                    $scope.data.construction = $scope.data.construction.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.construction) && $scope.data.construction >= 0) {
                    $scope.datastate.construction = true;
                    // Console.debug("construction IS NUMERIC");
                } else {
                    $scope.datastate.construction = false;
                    // Console.debug("construction IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();

            };

            //if the Production data changed
            $scope.checkProductionInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.production.indexOf(',') > -1) {
                    $scope.data.production = $scope.data.production.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.production) && $scope.data.production >= 0) {
                    $scope.datastate.production = true;
                    //  Console.debug(" production IS NUMERIC");
                } else {
                    $scope.datastate.production = false;
                    // Console.debug("production IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //if the byDelivery data changed
            $scope.checkByDeliveryInput = function() {
                if ($scope.data.byDelivery.indexOf(',') > -1) {
                    $scope.data.byDelivery = $scope.data.byDelivery.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.byDelivery) && $scope.data.byDelivery >= 0) {
                    $scope.datastate.byDelivery = true;
                    // Console.debug(" byDelivery IS NUMERIC");
                } else {
                    $scope.datastate.byDelivery = false;
                    // Console.debug("byDelivery IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debug
            $scope.printData = function() {
                Console.debug("construction: " + $scope.data.construction);
                Console.debug("production: " + $scope.data.production);
                Console.debug("byDelivery: " + $scope.data.byDelivery);
                Console.debug("month value: " + $scope.dropdownMonthValue);
                Console.debug("year value: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/remainingPointsResponse.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "construction": $scope.data.construction,
                        "production": $scope.data.production,
                        "byDelivery": $scope.data.byDelivery,
                        "note": $scope.data.note,
                        "month": $scope.dropdownMonthValue,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'remainingpoints/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //data updating failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.scrappedmaterial', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-scrappedmaterial', {
                templateUrl: 'datainput/scrappedmaterial.tpl.html',
                controller: 'DataInputScrappedmaterialController'
            });
        }
    ])
    .controller('DataInputScrappedmaterialController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputScrappedmaterialController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the datinput values
            $scope.data = {
                cost: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'cost': false,
                'month': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownMonthText = $filter('translate')('_month');
            $scope.dropdownYearText = $filter('translate')('_year');
            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/processingtime/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    //Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default, templateurl and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 9
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownMonthValue = function(text) {
                $scope.datastate.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + text);
                $scope.dropdownMonthValue = text;
                $scope.checkIfAllTrue();
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the Cost data changed
            $scope.checkCostInput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.cost.indexOf(',') > -1) {
                    $scope.data.cost = $scope.data.cost.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.cost) && $scope.data.cost >= 0) {
                    $scope.datastate.cost = true;
                    //Console.debug("readyForInspection IS NUMERIC");
                } else {
                    $scope.datastate.cost = false;
                    //Console.debug("readyForInspection IS NOT NUMERIC");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debuggin
            $scope.printData = function() {
                Console.debug("Cost: " + $scope.data.cost);
                Console.debug("month value: " + $scope.dropdownMonthValue);
                Console.debug("year value: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/scrappedMaterialResponse.html'
                };
            };
            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "cost": $scope.data.cost,
                        "note": $scope.data.note,
                        "month": $scope.dropdownMonthValue,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'scrappedmaterial/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.upstreamprocessmistakes', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-upstreamprocessmistakes', {
                templateUrl: 'datainput/upstreamprocessmistakes.tpl.html',
                controller: 'DataInputUpstreamProcessMistakesController'
            });
        }
    ])
    .controller('DataInputUpstreamProcessMistakesController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputUpstreamProcessMistakesController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init the datainput values
            $scope.data = {
                percent: ""
            };

            //init the dataState with all false.
            //The data can only submitted if all true
            $scope.datastate = {
                'percent': false,
                'month': false,
                'year': false
            };

            //init the text for the dropdown menus
            $scope.dropdownMonthText = $filter('translate')('_month');
            $scope.dropdownYearText = $filter('translate')('_year');

            // get the values from the server for the dropdowns
            $http({
                method: "GET",
                url: '/upstreamprocessmistakes/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                }
            }).error(function(data, status, headers, config) {
                Console.debug("data", data);
                Console.debug("status", status);
                Console.debug("headers", headers);
                Console.debug("config", config);
            });

            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default, templateurl and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 10
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownMonthValue = function(text) {
                $scope.datastate.month = true;
                $scope.dropdownMonthText = $filter('translate')('_' + text);
                $scope.dropdownMonthValue = text;
                $scope.checkIfAllTrue();
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownYearValue = function(year) {
                $scope.datastate.year = true;
                $scope.dropdownYearText = year;
                $scope.dropdownYearValue = year;
                $scope.checkIfAllTrue();
            };

            //if the Percent data changed
            $scope.checkPercentinput = function() {
                //when someone enters a comma instead of a dot it will be change to a dot
                if ($scope.data.percent.indexOf(',') > -1) {
                    $scope.data.percent = $scope.data.percent.replace(",", ".");
                }
                //Test for numeric and positive value
                if ($.isNumeric($scope.data.percent) && $scope.data.percent >= 0 && $scope.data.percent <= 100) {
                    $scope.datastate.percent = true;
                    //Console.debug("percent IS NUMERIC and between 0 and 100");
                } else {
                    $scope.datastate.percent = false;
                    //Console.debug("percent IS NOT NUMERIC or not between 0 100");
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //only for debuggin
            $scope.printData = function() {
                Console.debug("percent: " + $scope.data.percent);
                Console.debug("month: " + $scope.dropdownMonthValue);
                Console.debug("year: " + $scope.dropdownYearValue);
            };

            //Delete the form for response
            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'remainingPointsResponse.html',
                    url: 'assets/datainputresponse/upstreamProcessMistakes.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double  Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "percent": $scope.data.percent,
                        "note": $scope.data.note,
                        "month": $scope.dropdownMonthValue,
                        "year": $scope.dropdownYearValue
                    };
                    $http({
                        url: 'upstreamprocessmistakes/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.responsedata.month = $filter('translate')('_' + data.month);
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            //Data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.month');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('datainput.workingstepmistakes', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/datainput-workingstepmistakes', {
                templateUrl: 'datainput/workingstepmistakes.tpl.html',
                controller: 'DataInputWorkingstepMistakesController'
            });
        }
    ])
    .controller('DataInputWorkingstepMistakesController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$compile',
        '$location',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $compile,
            $location

        ) {
            Console.group("DataInputWorkingstepMistakesController entered.");


            //sets ngDisable to false(submitbutton is enabled!)
            $scope.submitDisabled = false;

            //init the Button color (red )
            $scope.buttonstate = "btn btn-danger";

            //init datainput values
            $scope.data = {
                logistics : "",
                mechanicalconstruction : "",
                assembly : "",
                finalassembly : "",
                check : "",
                rework : ""
            };

            //init the text for the dropdown menus
            $scope.dropdownCalendarWeekText = $filter('translate')('_calendar.week');

            //init datastate for the checkIfAllTrue function
            $scope.datastate = {
                'logistics': false,
                'mechanicalconstruction': false,
                'assembly': false,
                'finalassembly': false,
                'check': false,
                'rework': false,
                'calendarWeek': false
            };

            //get the inputdata from the server
            $http({
                method: "GET",
                url: '/workingstepmistakes/inputdata/'
            }).
            success(function(data) {
                if (!data.error) {
                    Console.debug("data", data);
                    $scope.inputData = data;
                    $scope.inputData.calendarWeeks = $scope.inputData.calendarWeeks.reverse();
                }
            });
            /*
        updateKey: 1 Customersatisfaction
        updateKey: 2 Deliveryreliabilitylogistics
        updateKey: 3 ideasprocessimprovements
        updateKey: 4 Capacity
        updateKey: 5 Labourproductivity
        updateKey: 6 Portfolio
        updateKey: 7 ProcessingTime
        updateKey: 8 Remainingpoints
        updateKey: 9 scrappedmaterial
        updateKey: 10 Upstreamprrocessmistakes
        updateKey: 11 workingsstepmistakes
        updateKey: 12 NumberPrdoducedCabinets
        updateKey: 13 DeliveryReliabilityUpstreamConstruction
        */
            //set the smiley values: 2 is default, templateurl and updateKey
            $scope.smiley = {
                value: 2,
                updateKey: 11
            };

            //change the smiley value
            $scope.changeSmileyValue = function(value) {
                if (value >= 1 && value <= 3) {
                    $scope.smiley.value = value;
                } else {
                    $scope.smiley.value = 2;
                }
            };

            //sends the smileyvalue to server
            $scope.submitSmileyValue = function() {
                var postObject = {
                    "updateValue": $scope.smiley.value,
                    "updateKey": $scope.smiley.updateKey
                };
                $http({
                    url: 'smiley/',
                    method: 'POST',
                    data: postObject
                }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                    Console.debug("ErroR:status:", status);
                    Console.debug(data);
                });
            };

            //if the data change of the field
            $scope.checkLogisticsInput = function() {
                //allow no float number
                if ($scope.data.logistics.indexOf(',') > -1) {
                    $scope.data.logistics = $scope.data.logistics.replace(",", "");
                }
                if ($scope.data.logistics.indexOf('.') > -1) {
                    $scope.data.logistics = $scope.data.logistics.replace(".", "");
                }
                if ($.isNumeric($scope.data.logistics) && $scope.data.logistics >= 0) {
                    $scope.datastate.logistics = true;
                } else {
                    $scope.datastate.logistics = false;
                }
                $scope.checkIfAllTrue();
            };

            //if the data change of the field
            $scope.checkMechanicalconstructionInput = function() {
                //allow no float number
                if ($scope.data.mechanicalconstruction.indexOf(',') > -1) {
                    $scope.data.mechanicalconstruction = $scope.data.mechanicalconstruction.replace(",", "");
                }
                if ($scope.data.mechanicalconstruction.indexOf('.') > -1) {
                    $scope.data.mechanicalconstruction = $scope.data.mechanicalconstruction.replace(".", "");
                }
                if ($.isNumeric($scope.data.mechanicalconstruction) && $scope.data.mechanicalconstruction >= 0) {
                    $scope.datastate.mechanicalconstruction = true;
                } else {
                    $scope.datastate.mechanicalconstruction = false;
                }
                $scope.checkIfAllTrue();
            };

            //if the data change of the field
            $scope.checkAssemblyInput = function() {
                //allow no float number
                if ($scope.data.assembly.indexOf(',') > -1) {
                    $scope.data.assembly = $scope.data.assembly.replace(",", "");
                }
                if ($scope.data.assembly.indexOf('.') > -1) {
                    $scope.data.assembly = $scope.data.assembly.replace(".", "");
                }
                if ($.isNumeric($scope.data.assembly) && $scope.data.assembly >= 0) {
                    $scope.datastate.assembly = true;
                } else {
                    $scope.datastate.assembly = false;
                }
                $scope.checkIfAllTrue();
            };

            //if the data change of the field
            $scope.checkFinalassemblyInput = function() {
                if ($scope.data.finalassembly.indexOf(',') > -1) {
                    $scope.data.finalassembly = $scope.data.finalassembly.replace(",", "");
                }
                if ($scope.data.finalassembly.indexOf('.') > -1) {
                    $scope.data.finalassembly = $scope.data.finalassembly.replace(".", "");
                }
                if ($.isNumeric($scope.data.finalassembly) && $scope.data.finalassembly >= 0) {
                    $scope.datastate.finalassembly = true;
                } else {
                    $scope.datastate.finalassembly = false;
                }
                $scope.checkIfAllTrue();
            };

            //if the data change of the field
            $scope.checkCheckInput = function() {
                if ($scope.data.check.indexOf(',') > -1) {
                    $scope.data.check = $scope.data.check.replace(",", "");
                }
                if ($scope.data.check.indexOf('.') > -1) {
                    $scope.data.check = $scope.data.check.replace(".", "");
                }
                if ($.isNumeric($scope.data.check) && $scope.data.check >= 0) {
                    $scope.datastate.check = true;
                } else {
                    $scope.datastate.check = false;
                }
                $scope.checkIfAllTrue();
            };
            //if the data change of the field
            $scope.checkReworkInput = function() {
                if ($scope.data.rework.indexOf(',') > -1) {
                    $scope.data.rework = $scope.data.rework.replace(",", "");
                }
                if ($scope.data.rework.indexOf('.') > -1) {
                    $scope.data.rework = $scope.data.rework.replace(".", "");
                }
                if ($.isNumeric($scope.data.rework) && $scope.data.rework >= 0) {
                    $scope.datastate.rework = true;
                } else {
                    $scope.datastate.rework = false;
                }
                $scope.checkIfAllTrue();
            };

            //returns false if one field are empty
            $scope.checkIfAllTrue = function() {
                var temp = true;
                _.each($scope.datastate, function(value, key) {
                    if (!value) {
                        temp = false;
                    }
                });
                if (temp) {
                    $scope.makeButtonSuccess();
                    return true;
                } else {
                    $scope.makeButtonWarning();
                    return false;
                }
            };

            //sets the value and the text for the dropdown menu
            $scope.setDropdownCalendarWeekValue = function(value) {
                $scope.dropdownCalendarWeekText = value;
                $scope.dropDownCalendarWeekValue = value;
                $scope.datastate.calendarWeek = true;
                $scope.checkIfAllTrue();
            };

            //only for debug
            $scope.printdata = function() {
                console.log("logistics: " + $scope.data.logistics);
                console.log("Mechnicalconstruction: " + $scope.data.mechanicalconstruction);
                console.log("assembly: " + $scope.data.assembly);
                console.log("finalassembly: " + $scope.data.finalassembly);
                console.log("check: " + $scope.data.check);
                console.log("rework: " + $scope.data.rework);
            };

            $scope.clearForm = function() {
                $("#datainputform").remove();
            };

            //Creates the view if the Data successfully submitted and shows the values
            $scope.createResponseView = function() {
                //creates a date from the milliseconds
                $scope.responsedata.date = new Date($scope.responsedata.date);
                $scope.noUpdateData();
                $scope.dataResponseTemplate = {
                    name: 'customerSatisfactionResponse.html',
                    url: 'assets/datainputresponse/workingstepmistakesResponse.html'
                };
            };

            // change the route to the main datainput page
            $scope.backToDataInput = function() {
                $location.path("/datainput");
            };

            // sets the data to zero if a field is null or undiefiend. So theres always a correct record
            $scope.setData = function() {
                if (!$scope.data.logistics) {
                    $scope.data.logistics = 0;
                }
                if (!$scope.data.mechanicalconstruction) {
                    $scope.data.mechanicalconstruction = 0;
                }
                if (!$scope.data.assembly) {
                    $scope.data.assembly = 0;
                }
                if (!$scope.data.finalassembly) {
                    $scope.data.finalassembly = 0;
                }
                if (!$scope.data.check) {
                    $scope.data.check = 0;
                }
                if (!$scope.data.rework) {
                    $scope.data.rework = 0;
                }
                if (!$scope.data.note) {
                    $scope.data.note = "-";
                }
            };

            // function if the submitbutton is klicked
            // calls data check functions
            // sends the data to the server if erverything is ok
            $scope.submit = function(method) {
                if ($scope.checkIfAllTrue()) {
                    //Preventing Double Form Submission
                    $scope.submitDisabled = true;
                    var postObject = {
                        "logistics": String($scope.data.logistics),
                        "mechanicalconstruction": String($scope.data.mechanicalconstruction),
                        "assembly": String($scope.data.assembly),
                        "finalassembly": String($scope.data.finalassembly),
                        "check": String($scope.data.check),
                        "rework": String($scope.data.rework),
                        "note": $scope.data.note,
                        "calendarWeek": $scope.dropDownCalendarWeekValue
                    };
                    $http({
                        url: 'workingstepmistakes/',
                        method: method,
                        data: postObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitSmileyValue();
                        $scope.clearForm();
                        $scope.responsedata = data;
                        $scope.createResponseView();
                    }).error(function(data, status, headers, config) {
                        $scope.status = status;
                        switch (status) {
                            //data not modified -> create update view
                            case 304:
                                $scope.status = $filter('translate')('_data.already.existing.calendar.week');
                                $scope.updateTemplate = {
                                    name: 'update.html',
                                    url: 'assets/update/update.html'
                                };
                                break;
                                //updating data failed
                            case 305:
                                Console.debug("data: ", data, "status: ", status);
                                Console.debug("updating data failed: No Document found, or more than one found");
                                $scope.noUpdateData();
                                $scope.status = "Data updating failed";
                                break;
                            default:
                                $scope.status = "Fehlermeldung nicht vorhanden";
                        }
                    });
                } else {
                    alert("please enter correct values");
                }
            };

            //if the user doesen't update the data
            $scope.noUpdateData = function() {
                $scope.status = null;
                $scope.updateTemplate = null;
            };

            //button turns green
            $scope.makeButtonSuccess = function() {
                $scope.buttonstate = "btn btn-success";
            };

            //button turns red
            $scope.makeButtonWarning = function() {
                $scope.buttonstate = "btn btn-danger";
            };
            Console.groupEnd();
        }
    ]);
angular.module('delete', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/delete', {
        templateUrl: 'delete/delete.tpl.html',
        controller: 'DeleteController'
      });
    }
  ])
  .controller('DeleteController', [
    '$timeout',
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      $timeout,
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("DeleteController entered.");
      //Data of the Urls for every view
      $scope.Urls = {
        customerSatisfaction: {
          getUrl: '/customerSatisfaction/all/',
          templateUrl: 'assets/delete/customerSatisfaction.html',
          deleteUrl: '/customerSatisfaction/delete/'
        },
        workingstepMistakes: {
          getUrl: '/workingstepmistakes/all/',
          templateUrl: 'assets/delete/workingstepMistakes.html',
          deleteUrl: '/workingstepmistakes/delete/'
        },
        remainingPoints: {
          getUrl: '/remainingpoints/all/',
          templateUrl: 'assets/delete/remainingPoints.html',
          deleteUrl: '/remainingpoints/delete/'
        },
        processingTime: {
          getUrl: '/processingtime/all/',
          templateUrl: 'assets/delete/processingTime.html',
          deleteUrl: '/processingtime/delete/'
        },
        upstreamProcessMistakes: {
          getUrl: '/upstreamprocessmistakes/all/',
          templateUrl: 'assets/delete/upstreamProcessMistakes.html',
          deleteUrl: '/upstreamprocessmistakes/delete/'
        },
        portfolio: {
          getUrl: '/portfolio/all/',
          templateUrl: 'assets/delete/portfolio.html',
          deleteUrl: '/portfolio/delete/'
        },
        labourProductivity: {
          getUrl: '/labourproductivity/all/',
          templateUrl: 'assets/delete/labourProductivity.html',
          deleteUrl: '/labourproductivity/delete/'
        },
        scrappedMaterial: {
          getUrl: '/scrappedmaterial/all/',
          templateUrl: 'assets/delete/scrappedMaterial.html',
          deleteUrl: '/scrappedmaterial/delete/'
        },
        deliveryReliabilityLogistics: {
          getUrl: '/deliveryreliabilitylogistics/all/',
          templateUrl: 'assets/delete/deliveryReliabilityLogistics.html',
          deleteUrl: '/deliveryreliabilitylogistics/delete/'
        },
        capacity: {
          getUrl: '/capacity/all/',
          templateUrl: 'assets/delete/capacity.html',
          deleteUrl: '/capacity/delete/'
        },
        ideasProcessImprovements: {
          getUrl: '/ideasprocessimprovements/all/',
          templateUrl: 'assets/delete/ideasProcessImprovements.html',
          deleteUrl: '/ideasprocessimprovements/delete/'
        },
        deliveryReliabilityUpstreamConstruction: {
          getUrl: '/deliveryreliabilityupstreamconstruction/all/',
          templateUrl: 'assets/delete/deliveryReliabilityUpstreamLogistics.html',
          deleteUrl: '/deliveryreliabilityupstreamconstruction/delete/'
        },
        numberProducedCabinets: {
          getUrl: '/numberproducedcabinets/all/',
          templateUrl: 'assets/delete/numberProducedCabinets.html',
          deleteUrl: '/numberproducedcabinets/delete/'
        }
      };

      // gets all the data from one Collection
      // getUrl: The Url fot the get Request
      // templateUrl: the html template for the right collection
      $scope.getData = function(getUrl, templateUrl) {
        $http({
          method: "GET",
          url: getUrl
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            $scope.collectionData = data;
            $scope.addCollectionDataMongoIdIndex($scope.collectionData.collection.length);
            $scope.settemplateUrl(templateUrl);
          }
        });
      };

      // Fills the Collection Array with a index that points to the mongoIdArray
      // where the mongoid is.
      $scope.addCollectionDataMongoIdIndex = function(number) {
        for (var i = 0; i < number; i++) {
          $scope.collectionData.collection[i].mongoIndex = i;
        }
      };

      // sets the html template Url ( every collection needs their own template)
      $scope.settemplateUrl = function(templateUrl) {
        $scope.collection = {
          url: templateUrl
        };
      };

      // Delete a collection document by the mongoId
      // mongoID: The mongoId wich is to be deleted
      // deletedUrl : The URL where the Delete request will send to
      // index: The index of the row of the Table ()
      $scope.deleteById = function(mongoId, deleteUrl, index, arrayIndex) {
        $http({
          url: deleteUrl,
          method: "DELETE",
          data: mongoId
        }).success(function(data, status, headers, config) {
          //wait 1 second that the modal can dissapear
          $timeout(function() {
            //deletes the row of the table
            $("#row" + index).remove();
            console.debug("collectiondata", $scope.collectionData);
            console.debug("array index", arrayIndex);
            $scope.collectionData.collection[arrayIndex].note = "DELETED!";
            $scope.$apply();
            console.debug("collectiondata", $scope.collectionData);
          }, 1000);
        }).error(function(data, status, headers, config) {
          Console.debug("data: ", data, "status: ", status);
          switch (status) {
            case 333:
              alert("please login");
              break;
            default:
              Console.debug("data: ", data, "status: ", status);
          }
        });
      };

      //if the user doesent want to delete a record.
      $scope.noClicked = function() {
        Console.debug("no clicked");
      };
      Console.groupEnd();
    }
  ]);
angular.module('options', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/options', {
                templateUrl: 'options/options.tpl.html',
                controller: 'OptionsController'
            });
        }
    ])
    .controller('OptionsController', [
        '$timeout',
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            $timeout,
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("OptionsController entered.");
            //init the status text
            $scope.sendOptionsToServerStatus = $filter('translate')('_send.option.to.server.input.help');
            $scope.presentationIntervalStatus = $filter('translate')('_presentation.interval.input.help');
            $scope.oldPasswordStatus = $filter('translate')('_admin.password.old');
            $scope.newPasswordOneStatus = $filter('translate')('_admin.password.new');
            $scope.newPasswordTwoStatus = $filter('translate')('_admin.password.repeat');
            //init the password data object
            $scope.data = {
                oldPassword: "",
                newPasswordOne: "",
                newPasswordTwo: ""
            };

            //index numbers of the operatingNumbersOptions Array
            $rootScope.operatingNumbersOptionsIndexes = {
                remainingPoints: 0,
                workingstepMistakes: 1,
                upstreanProcessMistakes: 2,
                portfolio: 3,
                labourProductivity: 4,
                scrappedMaterial: 5,
                deliveryReliabilityLogistics: 6,
                processingTime: 7,
                capacity: 8,
                ideasProcessImprovements: 9,
                customerSatisfaction: 10,
                numberProducedCabinets: 11,
                deliveryReliabilityUpstreamConstruction: 12
            };

            // interval change function
            $scope.intervalTimeChange = function() {
                //only if it is a number
                if ($.isNumeric($scope.data.intervalTime)) {
                    //set the interval time in milliseconds
                    $rootScope.intervalTime = $scope.data.intervalTime * 1000;
                    //change the status for 5 seconds
                    $scope.presentationIntervalStatus = $filter('translate')('_succesfully.changed.in') + " " + $scope.data.intervalTime + $filter('translate')('_seconds');
                    $timeout(function() {
                        $scope.presentationIntervalStatus = $filter('translate')('_presentation.interval.input.help');
                    }, 5000);
                }
            };

            //send the options to the server by using the rootScope function
            $scope.sendToServer = function() {
                $rootScope.sendOptionsToServer('PUT');
                //change the status for 5 seconds
                $scope.sendOptionsToServerStatus = $filter('translate')('_succesfully.send');
                $timeout(function() {
                    $scope.sendOptionsToServerStatus = $filter('translate')('_send.option.to.server.input.help');
                }, 5000);
            };

            //checks if both passwords are equal
            $scope.checkNewPassword = function() {
                var p1 = $scope.data.newPasswordOne;
                var p2 = $scope.data.newPasswordTwo;
                if (p1 === p2) {
                    return true;
                } else {
                    return false;
                }
            };

            //checks if  a admin password exists. So the old password input field will be hidden.
            $http({
                url: '/security/newpassword/',
                method: 'GET'
            }).success(function(data, status, headers, config) {}).error(function(data, status, headers, config) {
                Console.debug(status);
                Console.debug(data);
                switch (status) {
                    case 304:
                        Console.debug("ERROR 304: data: ", data, "status: ", status);
                        break;
                    case 305:
                        Console.debug("ERROR 305: data: ", data, "status: ", status);
                        break;
                    case 306:
                        console.debug("Kein altes password vorhanden");
                        $scope.oldPasswordStatus = "no old password require";
                        $scope.inputType = "hidden";
                        break;
                    case 307:
                        // console.debug("altes password vorhanden")
                        $scope.inputType = "password";
                        break;
                    default:
                        Console.debug("ERROR default: data: ", data, "status: ", status);

                }
            });

            // function for makeing new admin password, or set new admin password.
            $scope.sendNewPassword = function() {
                if ($scope.checkNewPassword()) {
                    // console.debug("sending ...")
                    var putObject = {
                        "oldPassword": $scope.data.oldPassword,
                        "newPassword": $scope.data.newPasswordOne
                    };
                    $http({
                        url: '/security/newpassword/',
                        method: 'PUT',
                        data: putObject
                    }).success(function(data, status, headers, config) {
                        $scope.submitStatus = "password  succesfully set";
                        $scope.data = {
                            oldPassword: "",
                            newPasswordOne: "",
                            newPasswordTwo: ""
                        };
                        $scope.inputType = "password";
                    }).error(function(data, status, headers, config) {
                        Console.debug(status);
                        Console.debug(data);
                        switch (status) {
                            case 304:
                                Console.debug("ERROR 304: data: ", data, "status: ", status);
                                $scope.submitStatus = "old password not correct";
                                break;
                            case 305:
                                Console.debug("ERROR 305: data: ", data, "status: ", status);
                                break;
                            default:
                                Console.debug("ERROR default: data: ", data, "status: ", status);
                        }
                    });
                } else {
                    $scope.submitStatus = "Please enter Password";
                }
            };
            Console.groupEnd();
        }
    ]);
angular.module('statsview.capacity', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/capacity', {
        templateUrl: 'statsview/capacity.tpl.html',
        controller: 'CapacityController'
      });
    }
  ])
  .controller('CapacityController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("CapacityController entered.");

      //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/capacity/'
        }).
        success(function(data) {
          if (!data.error) {
            //console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
              // console.debug("smileyvalue found")
              //$scope.setSmileyValue(data.smileyValue);
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: [
                '#008AD9',
                '#B10024'
              ],
              chart: {
                type: 'line',
                spacingTop: 80
              },
              title: {
                text: $filter('translate')('_capacity.title'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                title: {
                  text: $filter('translate')('_calendar.week')
                },
                categories: data.categories
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_capacity.percent')
                },
                min: 0,
                plotLines: [{
                  //RED
                  value: 100,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {

                    text: $filter('translate')('_target.value')+' 2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '20px',
                      color: '#B10024'
                    }
                  }
                }]
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: false
                }
              },
              series: [{
                name: $filter('translate')('_upstream.process.mistakes.actual'),
                data: data.actualPercent
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview.customersatisfaction', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/customersatisfaction', {
                templateUrl: 'statsview/customersatisfaction.tpl.html',
                controller: 'CustomerSatisfactionController'
            });
        }
    ])
    .controller('CustomerSatisfactionController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("CustomerSatisfactionController entered.");

            // counts the number of customer satisfactions
            $scope.numberOfCustomers = function(data) {
                var number = 0;
                number += data.dissatisfied;
                number += data.ok;
                number += data.satisfied;
                number += data.veryDissatisfied;
                number += data.verySatisfied;
                return number;
            };

            //get the data from the server and creates the chart
            $http({
                method: "GET",
                url: '/customerSatisfaction/'
            }).
            success(function(data, status, headers, config) {
                //check if SmileyValue exists
                if (data.smileyValue) {
                    $rootScope.setSmileyValue(data.smileyValue);
                } else {
                    console.debug("smileyvalue not found");
                }
                if (!data.error) {
                    // console.debug("data", data);
                    // console.debug("header", headers);
                    // console.debug("config", config);
                    // console.debug("screen width", screen.width)
                    $scope.numberOfCustomers(data);
                    var date = new Date();
                    var userwidth = document.getElementById('highcharts').offsetWidth - 300;
                    var subtitle = " " + (date.getMonth() + 1) + '/' + (date.getYear() - 101) + ' - ' + (date.getMonth() + 1) + '/' + (date.getYear() - 100);
                    $scope.piechartdata = [
                        [$filter('translate')('_customer.veryDissatisfied'), data.veryDissatisfied],
                        [$filter('translate')('_customer.dissatisfied'), data.dissatisfied],
                        [$filter('translate')('_customer.ok'), data.ok],
                        [$filter('translate')('_customer.satisfied'), data.satisfied],
                        [$filter('translate')('_customer.verySatisfied'), data.verySatisfied]
                    ];
                    $scope.pieChart = {

                       
                        options: {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false
                            },
                            credits: false
                        },
                        title: {
                            text: $filter('translate')('_customer.title'),
                            y: 20
                        },
                        subtitle: {
                            text: subtitle,
                            y: 40
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                //cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    color: '#000000',
                                    connectorColor: '#000000',
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        lineHeight: '26px',
                                        fontSize: '23px'
                                    }
                                },
                                colors: ['#B10024', '#EE8D00', '#FFE400', '#008AD9', '#C9D200']
                            }
                        },
                        series: [{
                            type: 'pie',
                            name: 'customerSatisfaction',
                            data: $scope.piechartdata
                        }],
                        labels: {
                            items: [{
                                html: $filter('translate')('_customer.number.ask.customers') + $scope.numberOfCustomers(data),
                                style: {
                                    left: '50px',
                                    top: '750px',
                                    fontFamily: '\'Lato\', sans-serif',
                                    lineHeight: '26px',
                                    fontSize: '23px'
                                }
                            }, {
                                html: $filter('translate')('_actual') + ' 2013: <br>52,2 % ' + $filter('translate')('_customer.verySatisfied') + '<br>47,8 % ' + $filter('translate')('_customer.satisfied'),
                                style: {
                                    left: userwidth,
                                    top: '610px',
                                    fontFamily: '\'Lato\', sans-serif',
                                    lineHeight: '26px',
                                    fontSize: '23px'
                                }
                            }, {
                                html: $filter('translate')('_target.value') + ' 2014: <br>65 % ' + $filter('translate')('_customer.verySatisfied') + '<br>35 % ' + $filter('translate')('_customer.satisfied'),
                                style: {
                                    left: userwidth,
                                    top: '710px',
                                    fontFamily: '\'Lato\', sans-serif',
                                    lineHeight: '26px',
                                    fontSize: '23px'
                                }
                            }]
                        }
                    };

                }
            });
            Console.groupEnd();
        }
    ]);
angular.module('statsview.deliveryreliabilitylogistics', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/deliveryreliabilitylogistics', {
                templateUrl: 'statsview/deliveryreliabilitylogistics.tpl.html',
                controller: 'DeliveryReliabilityLogisticsController'
            });
        }
    ])
    .controller('DeliveryReliabilityLogisticsController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("DeliveryReliabilityLogisticsController entered.");

            //get the data from the server and creates the chart
            $http({
                method: "GET",
                url: '/deliveryreliabilitylogistics/'
            }).
            success(function(data) {
                if (!data.error) {
                    console.debug("data", data);
                    //check if SmileyValue exists
                    if (data.smileyValue) {
                        $rootScope.setSmileyValue(data.smileyValue);
                    } else {
                        console.debug("smileyvalue not found");
                    }
                    var numberCommissioningTrolleysAVG = $scope.calculatedAVG(data.numberCommissioningTrolleys);
                    var numberIncompleteCommissioningTrolleysAVG = $scope.calculatedAVG(data.numberIncompleteCommissioningTrolleys);
                    //data.numberCommissioningTrolleys
                    //data.numberIncompleteCommissioningTrolleys
                    //data.categories

                    $scope.lineChart = {
                        chart: {
                            spacingTop: 80
                        },
                        title: {
                            text: $filter('translate')('_delivery.reliability.logistics.title')
                        },
                        xAxis: [{
                            categories: data.categories
                        }],
                        yAxis: [{ // Primary yAxis
                            labels: {
                                format: '{value}'
                            },
                            title: {
                                text: $filter('translate')('_delivery.reliability.logistics.number.commissioning.trolleys'),
                                style: {
                                    color: '#008AD9'
                                }
                            },
                            plotLines: [{
                                value: numberCommissioningTrolleysAVG,
                                color: '#008AD9',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    text: 'Ø',
                                    align: 'right',
                                    textAlign: 'left',
                                    x: -20,
                                    style: {
                                        fontWeight: 'bold',
                                        fontSize: '15px'
                                    }
                                }
                            }]
                        }, { // Secondary yAxis
                            title: {
                                text: $filter('translate')('_delivery.reliability.logistics.number.incomplete.commissioning.trolleys'),
                                style: {
                                    color: '#EE8D00'
                                }
                            },plotLines: [{
                                value: numberIncompleteCommissioningTrolleysAVG,
                                color: '#EE8D00',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    text: 'Ø',
                                    align: 'right',
                                    textAlign: 'left',
                                    x: -20,
                                    style: {
                                        fontWeight: 'bold',
                                        fontSize: '15px'
                                    }
                                }
                            }],
                            labels: {
                                format: '{value}%'
                            },
                            opposite: true
                        }],
                        tooltip: {
                            shared: true
                        },
                        series: [{
                            name: $filter('translate')('_delivery.reliability.logistics.number.commissioning.trolleys'),
                            type: 'column',
                            color: '#008AD9',
                            data: data.numberCommissioningTrolleys
                        }, {
                            name: $filter('translate')('_delivery.reliability.logistics.number.incomplete.commissioning.trolleys'),
                            yAxis: 1,
                            type: 'spline',
                            color: '#EE8D00',
                            data: data.numberIncompleteCommissioningTrolleys
                        }]
                    };
                }
            });

            $scope.calculatedAVG = function(values) {
                var temp = 0;
                for (var i = 0; i < values.length; i++) {
                    temp += values[i];
                }
                temp = temp/values.length;
                return temp;
            };
            Console.groupEnd();
        }
    ]);
angular.module('statsview.deliveryreliabilityupstreamconstruction', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/deliveryreliabilityupstreamconstruction', {
                templateUrl: 'statsview/deliveryreliabilityupstreamconstruction.tpl.html',
                controller: 'DeliveryReliabilityUpstreamConstructionController'
            });
        }
    ])
    .controller('DeliveryReliabilityUpstreamConstructionController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("DeliveryReliabilityUpstreamConstructionController entered.");



            //get the data from the server and creates the chart
            $http({
                method: "GET",
                url: '/deliveryreliabilityupstreamconstruction/'
            }).
            success(function(data) {
                if (!data.error) {
                    console.debug("data", data);
                    //check if SmileyValue exists
                    if (data.smileyValue) {
                       $rootScope.setSmileyValue(data.smileyValue);
                    } else {
                        console.debug("smileyvalue not found");
                    }
                    $scope.lineChart = {
                        colors: [
                            '#008AD9',
                            '#B10024'
                        ],
                        chart: {
                            type: 'line',
                            spacingRight: 170
                        },
                        title: {
                            text: $filter('translate')('_delivery.reliability.upstream.construction'),
                            y: 40
                        },
                        subtitle: {
                            text: data.year
                        },
                        xAxis: {
                            title: {
                                text: $filter('translate')('_delivery.reliability.upstream.construction.deviation.in.days')
                            },
                            categories: data.categories,
                            plotLines: [{
                                value: 0,
                                zIndex: 5,
                                color: '#B10024',
                                dashStyle: 'shortdash',
                                width: 2

                            }, {
                                value: 1,
                                zIndex: 5,
                                color: '#B10024',
                                dashStyle: 'shortdash',
                                width: 2
                            }]
                        },
                        yAxis: {
                            title: {
                                text: $filter('translate')('_number')
                            },
                            min: 0,
                            minRange: 30,
                            allowDecimals: false

                        },
                        tooltip: {
                            enabled: false,
                            formatter: function() {
                                return '<b>' + this.series.name + '</b><br/>' +
                                    this.x + ': ' + this.y + '°C';
                            }
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        fontSize: '25px'
                                    }
                                },
                                enableMouseTracking: false
                            },
                            series: {
                                lineWidth: 6
                            }
                        },
                        series: [{
                            type: 'column',
                            name: $filter('translate')('_upstream.process.mistakes.actual'),
                            data: data.deviationInDays
                        }, {
                            type: 'spline',
                            name: $filter('translate')('_upstream.process.mistakes.actual'),
                            data: data.deviationInDays
                        }]
                    };
                }
            });



            Console.groupEnd();
        }
    ]);
angular.module('statsview.ideasprocessimprovements', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/ideasprocessimprovements', {
        templateUrl: 'statsview/ideasprocessimprovements.tpl.html',
        controller: 'IdeasProcessImprovementsController'
      });
    }
  ])
  .controller('IdeasProcessImprovementsController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("IdeasProcessImprovementsController entered.");

      //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/ideasprocessimprovements/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
             $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: ['#008AD9',
                '#B10024',
                '#EE8D00'
              ],
              chart: {
                type: 'line',
                spacingTop: 80
              },
              title: {
                text: $filter('translate')('_ideas.process.improvements'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                categories: data.categories.reverse()
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_ideas.process.improvements.number.ideas')
                },
                min: 0
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: false
                }
              },
              series: [{
                name: $filter('translate')('_ideas.process.improvements.ideas.overall'),
                data: data.overallIdeas.reverse()
              }, {
                name: $filter('translate')('_ideas.process.improvements.implemented.ideas'),
                data: data.implementedIdeas.reverse()
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview.labourproductivity', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/labourproductivity', {
        templateUrl: 'statsview/labourproductivity.tpl.html',
        controller: 'LabourProductivityController'
      });
    }
  ])
  .controller('LabourProductivityController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("LabourProductivityController entered.");

     //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/labourproductivity/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: ['#008AD9',
                '#B10024',
                '#EE8D00'
              ],
              chart: {
                type: 'line',
                spacingRight: 130

              },
              title: {
                text: $filter('translate')('_labour.productivity'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                categories: data.categories,
                title: {
                  text: $filter('translate')('_calendar.week')
                }
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_labour.productivity.yAxis.title')
                },
                min: 35,
                max: 95,
                plotLines: [{
                  value: 40.29,
                  color: 'green',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual')+' 2012',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: 'green'
                    }
                  }
                }, {
                  value: 75.0,
                  color: 'green',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual')+' 2013',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: 'green'
                    }
                  }
                }, {
                  value: 80.0,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_target')+' 2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                }, {
                  value: data.avgLabourProductivity,
                  color: '#EE8D00',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average.value.calendar.year'),
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#EE8D00'
                    }
                  }
                } ]
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true,
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px'
                    }
                  },
                  enableMouseTracking: false
                }
              },
              series: [{
                name: $filter('translate')('_labour.productivity'),
                data: data.labourProductivity
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview.numberproducedcabinets', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/numberproducedcabinets', {
        templateUrl: 'statsview/numberproducedcabinets.tpl.html',
        controller: 'NumberProducedCabinetsController'
      });
    }
  ])
  .controller('NumberProducedCabinetsController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("NumberProducedCabinetsController entered.");


        //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/numberproducedcabinets/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            //special mapping data to the chart;
            var ist = createIstArrayForData(data);
            var soll = createSollArrayForData(data);
            $scope.linecharts = {
              chart: {
                type: 'column',
                spacingTop: 80
              },
              title: {
                text: $filter('translate')('_number.produced.cabinets'),
                y: 40
              },
              xAxis: {
                categories: data.categories.reverse()
              },
              yAxis: {
                min: 0,
                title: {
                  text: $filter('translate')('_number.produced.cabinets')
                },
                stackLabels: {
                  enabled: true,
                  style: {
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '23px',
                    fontFamily: 'Arial'
                  }
                }
              },
              tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              plotOptions: {
                column: {
                  stacking: 'normal',
                  colorByPoint: true,
                  dataLabels: {
                    enabled: true,
                    style: {
                      color: '#000',
                      fontWeight: 'bold',
                      fontSize: '23px',
                      fontFamily: 'Arial'
                    }
                  }
                }
              },
              credits: {
                enabled: false
              },
              series: [{
                name: $filter('translate')('_target'),
                color: '#008AD9',
                data: soll.reverse()

              }, {
                name: $filter('translate')('_number.produced.cabinets'),
                color: '#EE8D00',
                data: ist.reverse()
              }]
            };
          }
        });

        //create special data Array for the highcharts series
        function createIstArrayForData(data) {
          var ist = [];
          for (var i = 0; i < data.size; i++) {
            ist[i] = {
              y: data.actual[i],
              color: '#EE8D00'
            };
          }
          return ist;
        }

        //create special data Array for the highcharts series
        function createSollArrayForData(data) {
          var soll = [];
          for (var i = 0; i < data.size; i++) {
            //if temp is negative highcharts will not display the value and this is what we want!
            var temp = data.target[i] - data.actual[i];
            //only when the value is null highchart will not display this value
            if (temp === 0)
              {temp = null;}
            soll[i] = {
              y: temp,
              color: '#008AD9'
            };
          }
          return soll;
        }
      Console.groupEnd();
    }
  ]);
angular.module('statsview.portfolio', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/portfolio', {
                templateUrl: 'statsview/portfolio.tpl.html',
                controller: 'PortfolioController'
            });
        }
    ])
    .controller('PortfolioController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("PortfolioController entered.");

            //get the data from the server and creates the chart
            $http({
                method: "GET",
                url: '/portfolio/'
            }).
            success(function(data) {
                if (!data.error) {
                    console.debug("data", data);
                    //check if SmileyValue exists
                    if (data.smileyValue) {
                        $rootScope.setSmileyValue(data.smileyValue);
                    } else {
                        console.debug("smileyvalue not found");
                    }
                    var max = $scope.getMaxValue(data.actualPortfolio);
                    $scope.lineChart = {
                        colors: [
                            '#008AD9',
                            '#B10024'
                        ],
                        chart: {
                            type: 'line',
                            spacingRight: 170,
                            spacingTop: 25
                        },
                        title: {
                            text: $filter('translate')('_portfolio.title'),
                            y: 40
                        },
                        subtitle: {
                            text: data.year
                        },
                        xAxis: {
                            title: {
                                text: $filter('translate')('_calendar.week')
                            },
                            categories: data.categories
                        },
                        yAxis: {
                            title: {
                                text: $filter('translate')('_portfolio.title')
                            },
                            min: 10,
                            max: max,
                            plotLines: [{
                                value: 45,
                                color: '#B10024',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    text: 'max',
                                    align: 'right',
                                    textAlign: 'left',
                                    x: 2,
                                    y: 5,
                                    style: {
                                        fontWeight: 'bold',
                                        fontSize: '15px'
                                    }
                                }
                            }, {
                                value: 35,
                                color: '#B10024',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    text: 'min',
                                    align: 'right',
                                    textAlign: 'left',
                                    x: 2,
                                    y: 5,
                                    style: {
                                        fontWeight: 'bold',
                                        fontSize: '15px'
                                    }
                                }
                            }]
                        },
                        tooltip: {
                            enabled: false,
                            formatter: function() {
                                return '<b>' + this.series.name + '</b><br/>' +
                                    this.x + ': ' + this.y + '°C';
                            }
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        fontSize: '25px'
                                    }
                                },
                                enableMouseTracking: false
                            },
                            series: {
                                lineWidth: 6
                            }
                        },
                        series: [{
                            name: $filter('translate')('_upstream.process.mistakes.actual'),
                            data: data.actualPortfolio
                        }]
                    };
                }
            });
            // get the max value for the y axis out of the data array
            $scope.getMaxValue = function(values) {
                var max = 70;
                _.each(values, function(value) {
                    if (value > max) {
                        max = value;
                    }
                });
                return max;
            };
            Console.groupEnd();
        }
    ]);

angular.module('statsview.processingtime', [])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/processingtime', {
                templateUrl: 'statsview/processingtime.tpl.html',
                controller: 'ProcessingTimeController'
            });
        }
    ])
    .controller('ProcessingTimeController', [
        'Console',
        '$translate',
        '$scope',
        '$http',
        '$filter',
        '$cookieStore',
        '$rootScope',
        function(
            Console,
            $translate,
            $scope,
            $http,
            $filter,
            $cookieStore,
            $rootScope
        ) {
            Console.group("ProcessingTimeController entered.");

            //get the data from the server and creates the chart
            $http({
                method: "GET",
                url: '/processingtime/'
            }).
            success(function(data) {
                if (!data.error) {
                    console.debug("data", data);
                    //check if SmileyValue exists
                    if (data.smileyValue) {
                        $rootScope.setSmileyValue(data.smileyValue);
                    } else {
                        console.debug("smileyvalue not found");
                    }


                    $scope.lineChart = {
                        colors: ['#008AD9',
                            '#B10024',
                            '#EE8D00'
                        ],
                        chart: {
                            type: 'line',
                            spacingRight: 170
                        },
                        title: {
                            text: $filter('translate')('_processing.time.title'),
                            y: 40
                        },
                        subtitle: {
                            text: data.year
                        },
                        xAxis: {
                            categories: data.categories.reverse()
                        },
                        yAxis: {
                            title: {
                                text: $filter('translate')('_days')
                            },
                            min: 0,
                            plotLines: [{
                                //RED
                                value: 8.84,
                                color: '#B10024',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    align: 'right',
                                    textAlign: 'left',
                                    text: $filter('translate')('_target.remainingpoints.done') + ' 2014',
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        fontSize: '15px',
                                        color: '#B10024'
                                    }
                                }
                            }, { //ORANG
                                value: 14.69,
                                color: '#EE8D00',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    align: 'right',
                                    textAlign: 'left',
                                    text: $filter('translate')('_target.delivered') + ' 2014',
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        fontSize: '15px',
                                        color: '#EE8D00'
                                    }
                                }
                            }, { //BLUE
                                value: 5.22,
                                color: '#008AD9',
                                dashStyle: 'shortdash',
                                width: 2,
                                label: {
                                    align: 'right',
                                    textAlign: 'left',
                                    text: $filter('translate')('_target.ready.for.inspection') + ' 2014',
                                    style: {
                                        fontFamily: '\'Lato\', sans-serif',
                                        fontSize: '15px',
                                        color: '#008AD9'
                                    }
                                }
                            }]
                        },
                        tooltip: {
                            enabled: false,
                            formatter: function() {
                                return '<b>' + this.series.name + '</b><br/>' +
                                    this.x + ': ' + this.y + '°C';
                            }
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    enabled: true
                                },
                                enableMouseTracking: false
                            }
                        },
                        series: [{
                            name: $filter('translate')('_processing.time.ready.for.inspection'),
                            data: data.readyForInspection.reverse()
                        }, {
                            name: $filter('translate')('_processing.time.remaining.points.finished'),
                            data: data.remainingPointsFinished.reverse()
                        }, {
                            name: $filter('translate')('_processing.time.delivered'),
                            data: data.delivered.reverse()
                        }]
                    };
                }
            });


            Console.groupEnd();
        }
    ]);

angular.module('statsview.remainingpoints', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/remainingPoints', {
        templateUrl: 'statsview/remainingpoints.tpl.html',
        controller: 'RemainingPointsController'
      });
    }
  ])
  .controller('RemainingPointsController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("RemainingPointsController entered.");

      //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/remainingpoints/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            var d = new Date();
            var n = d.getFullYear();
            var lastYear = n-1;
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: ['#008AD9',
                '#B10024',
                '#EE8D00'
              ],
              chart: {
                type: 'line',
                spacingRight: 170
              },
              title: {
                text: $filter('translate')('_remainingPoints'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                categories: data.categories.reverse()
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_remainingPoints.mistakes.per.cabinet')
                },
                min: 0,
                plotLines: [{
                  //RED PRODUCTION
                  value: data.productionAVG,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual.last') +' '+ data.production.length +' '+ $filter('translate')('_months'),
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                }, {
                  value: 3,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_target.for') +' 2014 ',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                },{
                  value: data.productionLastYearAVG,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                     y: 5,
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average') +' '+ lastYear,
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                }, { //ORANGE BYDELIVERY

                  value: data.byDeliveryAVG,
                  color: '#EE8D00',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual.last') +' '+ data.byDelivery.length +' '+ $filter('translate')('_months'),
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#EE8D00'
                    }
                  }
                }, {
                  value: 0.4,
                  color: '#EE8D00',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_target.for') +' 2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#EE8D00'
                    }
                  }
                },{
                  value: data.byDeliveryLastYearAVG,
                  color: '#EE8D00',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                     y: 5,
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average') +' '+ lastYear,
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#EE8D00'
                    }
                  }
                }, { //BLUE CONSTURUCTION
                  value: data.constructionAVG,
                  color: '#008AD9',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual.last') +' '+ data.construction.length +' '+ $filter('translate')('_months'),
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#008AD9'
                    }
                  }
                }, {
                  value: 0.8,
                  color: '#008AD9',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    y: 10,
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_target.for') +' 2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#008AD9'
                    }
                  }
                },{
                  value: data.constructionLastYearAVG,
                  color: '#008AD9',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                     y: 5,
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average') +' '+ lastYear,
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#008AD9'
                    }
                  }
                }]
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: false
                },
                series: {
                  lineWidth: 4
                }
              },
              series: [{
                name: $filter('translate')('_remainingPoints.construction'),
                data: data.construction.reverse()
              }, {
                name: $filter('translate')('_remainingPoints.production'),
                data: data.production.reverse()
              }, {
                name: $filter('translate')('_remainingPoints.byDelivery'),
                data: data.byDelivery.reverse()
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview.scrappedmaterial', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/scrappedmaterial', {
        templateUrl: 'statsview/scrappedmaterial.tpl.html',
        controller: 'ScrappedmaterialController'
      });
    }
  ])
  .controller('ScrappedmaterialController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("ScrappedmaterialController entered.");
//get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/scrappedmaterial/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            var d = new Date();
            var n = d.getFullYear();
            var lastYear = n-1;
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: ['#008AD9',
                '#B10024',
                '#EE8D00'
              ],
              chart: {
                type: 'line',
                spacingRight: 170,
                spacingTop: 25
              },
              title: {
                text: $filter('translate')('_scrapped.material'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                categories: data.categories.reverse()
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_scrapped.material.cost')
                },
                min: 0,
                max: 1500,
                plotLines: [{
                  //RED
                  value: 500,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average.cost')+'<br>2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                },{
                  //RED
                  value: data.averageCostLastYear,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_average')+'<br>'+lastYear,
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '15px',
                      color: '#B10024'
                    }
                  }
                }]
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: false
                }
              },
              series: [{
                name: $filter('translate')('_scrapped.material.cost'),
                data: data.cost.reverse()
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview', ['statsview.customersatisfaction','statsview.capacity','statsview.deliveryreliabilitylogistics','statsview.deliveryreliabilityupstreamconstruction','statsview.ideasprocessimprovements','statsview.labourproductivity','statsview.numberproducedcabinets','statsview.portfolio','statsview.processingtime','statsview.remainingpoints','statsview.scrappedmaterial','statsview.upstreamprocessmistakes','statsview.workingstepmistakes']);
angular.module('statsview.upstreamprocessmistakes', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/upstreamprocessmistakes', {
        templateUrl: 'statsview/upstreamprocessmistakes.tpl.html',
        controller: 'UpstreamProcessMistakesController'
      });
    }
  ])
  .controller('UpstreamProcessMistakesController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("UpstreamProcessMistakesController entered.");

      //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/upstreamprocessmistakes/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.lineChart = {
              colors: [
                '#008AD9',
                '#B10024'
              ],
              chart: {
                type: 'line',
                spacingTop: 80
              },
              title: {
                text: $filter('translate')('_upstream.process.mistakes.headline'),
                y: 40
              },
              subtitle: {
                text: data.year
              },
              xAxis: {
                categories: data.categories.reverse()
              },
              yAxis: {
                title: {
                  text: $filter('translate')('_upstream.process.mistakes.quality')
                },
                min: 70,
                max: 100,
                plotLines: [{
                  value: 95,
                  color: '#B10024',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    text: $filter('translate')('_aspiration') +' 2014',
                    style: {
                      fontWeight: 'bold',
                      fontSize: '20px',
                      color: '#B10024'
                    }
                  }
                }]
              },
              tooltip: {
                enabled: false,
                formatter: function() {
                  return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y + '°C';
                }
              },
              plotOptions: {
                line: {
                  dataLabels: {
                    enabled: true
                  },
                  enableMouseTracking: false
                }
              },
              series: [{
                name: $filter('translate')('_upstream.process.mistakes.actual'),
                data: data.actualPercent.reverse()
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('statsview.workingstepmistakes', [])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/workingstepmistakes', {
        templateUrl: 'statsview/workingstepmistakes.tpl.html',
        controller: 'WorkingstepMistakesController'
      });
    }
  ])
  .controller('WorkingstepMistakesController', [
    'Console',
    '$translate',
    '$scope',
    '$http',
    '$filter',
    '$cookieStore',
    '$rootScope',
    function(
      Console,
      $translate,
      $scope,
      $http,
      $filter,
      $cookieStore,
      $rootScope
    ) {
      Console.group("WorkingstepMistakesController entered.");

      //get the data from the server and creates the chart
        $http({
          method: "GET",
          url: '/workingstepmistakes/'
        }).
        success(function(data) {
          if (!data.error) {
            console.debug("data", data);
            //check if SmileyValue exists
            if (data.smileyValue) {
              $rootScope.setSmileyValue(data.smileyValue);
            } else {
              console.debug("smileyvalue not found");
            }
            $scope.linecharts = {
              colors: ['#B10024',
                '#EE8D00',
                '#FFE400',
                '#008AD9',
                '#C9D200',
                '#4B0459',
                '#002043',
                '#204333'
              ],
              chart: {
                type: 'column',
                spacingRight: 120
              },
              title: {
                text: $filter('translate')('_workingstepmistake'),
                y: 40
              },
              xAxis: {
                categories: data.months.reverse()
              },
              yAxis: {
                min: 0,
                title: {
                  text: $filter('translate')('_workingstepmistake')
                },
                plotLines: [{
                  value: 10,
                  color: 'black',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_target') + ' 2014',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '20px'
                    }
                  }
                }, {
                  value: 12,
                  color: 'black',
                  dashStyle: 'shortdash',
                  width: 2,
                  label: {
                    align: 'right',
                    textAlign: 'left',
                    text: $filter('translate')('_actual') +' 2013',
                    style: {
                      fontFamily: '\'Lato\', sans-serif',
                      fontSize: '20px'
                    }
                  }
                }]
              },
              tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
              },
              plotOptions: {
                column: {
                  pointPadding: 0.2,
                  borderWidth: 0
                }
              },
              series: [{
                name: $filter('translate')('_workingstepmistake.logistics'),
                data: data.logistics.reverse()

              }, {
                name: $filter('translate')('_workingstepmistake.mechanicalconstruction'),
                data: data.mechanicalconstruction.reverse()

              }, {
                name: $filter('translate')('_workingstepmistake.assembly'),
                data: data.assembly.reverse()

              }, {
                name: $filter('translate')('_workingstepmistake.finalassembly'),
                data: data.finalassembly.reverse()

              }, {
                name: $filter('translate')('_workingstepmistake.check'),
                data: data.check.reverse()

              }, {
                name: $filter('translate')('_workingstepmistake.rework'),
                data: data.rework.reverse()
              }]
            };
          }
        });
      Console.groupEnd();
    }
  ]);
angular.module('highcharts-ng', [])
  .factory('highchartsNGUtils', function() {

    return {

      //IE8 support
      indexOf: function(arr, find, i /*opt*/ ) {
        if (i === undefined) {
          i = 0;
        }
        if (i < 0) {
          i += arr.length;
        }
        if (i < 0) {
          i = 0;
        }
        for (var n = arr.length; i < n; i++) {
          if (i in arr && arr[i] === find) {
            return i;
          }
        }
        return -1;
      },


      prependMethod: function(obj, method, func) {
        var original = obj[method];
        obj[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          func.apply(this, args);
          if (original) {
            return original.apply(this, args);
          } else {
            return;
          }

        };
      },

      deepExtend: function deepExtend(destination, source) {
        //Slightly strange behaviour in edge cases (e.g. passing in non objects)
        //But does the job for current use cases.
        if (angular.isArray(source)) {
          destination = angular.isArray(destination) ? destination : [];
          for (var i = 0; i < source.length; i++) {
            destination[i] = deepExtend(destination[i] || {}, source[i]);
          }
        } else if (angular.isObject(source)) {
          for (var property in source) {
            destination[property] = deepExtend(destination[property] || {}, source[property]);
          }
        } else {
          destination = source;
        }
        return destination;
      }
    };

  }).directive('highchart', function(highchartsNGUtils) {

    // acceptable shared state
    var seriesId = 0;
    var ensureIds = function(series) {
      var changed = false;
      angular.forEach(series, function(s) {
        if (!angular.isDefined(s.id)) {
          s.id = 'series-' + seriesId++;
          changed = true;
        }
      });
      return changed;
    };

    // immutable
    var axisNames = ['xAxis', 'yAxis'];

    var getMergedOptions = function(scope, element, config) {
      var mergedOptions = {};

      var defaultOptions = {
        chart: {
          events: {}
        },
        title: {},
        subtitle: {},
        series: [],
        credits: {},
        plotOptions: {},
        navigator: {
          enabled: false
        }
      };

      if (config.options) {
        mergedOptions = highchartsNGUtils.deepExtend(defaultOptions, config.options);
      } else {
        mergedOptions = defaultOptions;
      }
      mergedOptions.chart.renderTo = element[0];

      angular.forEach(axisNames, function(axisName) {
        if (angular.isDefined(config[axisName])) {
          mergedOptions[axisName] = angular.copy(config[axisName]);

          if (angular.isDefined(config[axisName].currentMin) ||
            angular.isDefined(config[axisName].currentMax)) {

            highchartsNGUtils.prependMethod(mergedOptions.chart.events, 'selection', function(e) {
              var thisChart = this;
              if (e[axisName]) {
                scope.$apply(function() {
                  scope.config[axisName].currentMin = e[axisName][0].min;
                  scope.config[axisName].currentMax = e[axisName][0].max;
                });
              } else {
                //handle reset button - zoom out to all
                scope.$apply(function() {
                  scope.config[axisName].currentMin = thisChart[axisName][0].dataMin;
                  scope.config[axisName].currentMax = thisChart[axisName][0].dataMax;
                });
              }
            });

            highchartsNGUtils.prependMethod(mergedOptions.chart.events, 'addSeries', function(e) {
              scope.config[axisName].currentMin = this[axisName][0].min || scope.config[axisName].currentMin;
              scope.config[axisName].currentMax = this[axisName][0].max || scope.config[axisName].currentMax;
            });
          }
        }
      });

      if (config.title) {
        mergedOptions.title = config.title;
      }
      if (config.subtitle) {
        mergedOptions.subtitle = config.subtitle;
      }
      if (config.credits) {
        mergedOptions.credits = config.credits;
      }
      if (config.size) {
        if (config.size.width) {
          mergedOptions.chart.width = config.size.width;
        }
        if (config.size.height) {
          mergedOptions.chart.height = config.size.height;
        }
      }
      return mergedOptions;
    };

    var updateZoom = function(axis, modelAxis) {
      var extremes = axis.getExtremes();
      if (modelAxis.currentMin !== extremes.dataMin || modelAxis.currentMax !== extremes.dataMax) {
        axis.setExtremes(modelAxis.currentMin, modelAxis.currentMax, false);
      }
    };

    var processExtremes = function(chart, axis, axisName) {
      if (axis.currentMin || axis.currentMax) {
        chart[axisName][0].setExtremes(axis.currentMin, axis.currentMax, true);
      }
    };

    var chartOptionsWithoutEasyOptions = function(options) {
      return angular.extend({}, options, {
        data: null,
        visible: null
      });
    };

    return {
      restrict: 'EAC',
      replace: true,
      template: '<div></div>',
      scope: {
        config: '='
      },
      link: function(scope, element, attrs) {
        // We keep some chart-specific variables here as a closure
        // instead of storing them on 'scope'.

        // prevSeriesOptions is maintained by processSeries
        var prevSeriesOptions = {};

        var processSeries = function(series) {
          var i;
          var ids = [];

          if (series) {
            var setIds = ensureIds(series);
            if (setIds) {
              //If we have set some ids this will trigger another digest cycle.
              //In this scenario just return early and let the next cycle take care of changes
              return false;
            }

            //Find series to add or update
            angular.forEach(series, function(s) {
              ids.push(s.id);
              var chartSeries = chart.get(s.id);
              if (chartSeries) {
                if (!angular.equals(prevSeriesOptions[s.id], chartOptionsWithoutEasyOptions(s))) {
                  chartSeries.update(angular.copy(s), false);
                } else {
                  if (s.visible !== undefined && chartSeries.visible !== s.visible) {
                    chartSeries.setVisible(s.visible, false);
                  }
                  chartSeries.setData(angular.copy(s.data), false);
                }
              } else {
                chart.addSeries(angular.copy(s), false);
              }
              prevSeriesOptions[s.id] = chartOptionsWithoutEasyOptions(s);
            });

            //  Shows no data text if all series are empty
            if (scope.config.noData) {
              var chartContainsData = false;

              for (i = 0; i < series.length; i++) {
                if (series[i].data && series[i].data.length > 0) {
                  chartContainsData = true;

                  break;
                }
              }

              if (!chartContainsData) {
                chart.showLoading(scope.config.noData);
              } else {
                chart.hideLoading();
              }
            }
          }

          //Now remove any missing series
          for (i = chart.series.length - 1; i >= 0; i--) {
            var s = chart.series[i];
            if (highchartsNGUtils.indexOf(ids, s.options.id) < 0) {
              s.remove(false);
            }
          }

          return true;
        };

        // chart is maintained by initChart
        var chart = false;
        var initChart = function() {
          if (chart) {
            chart.destroy();
          }
          prevSeriesOptions = {};
          var config = scope.config || {};
          var mergedOptions = getMergedOptions(scope, element, config);
          chart = config.useHighStocks ? new Highcharts.StockChart(mergedOptions) : new Highcharts.Chart(mergedOptions);
          for (var i = 0; i < axisNames.length; i++) {
            if (config[axisNames[i]]) {
              processExtremes(chart, config[axisNames[i]], axisNames[i]);
            }
          }
          if (config.loading) {
            chart.showLoading();
          }

        };
        initChart();


        scope.$watch('config.series', function(newSeries, oldSeries) {
          var needsRedraw = processSeries(newSeries);
          if (needsRedraw) {
            chart.redraw();
          }
        }, true);

        scope.$watch('config.title', function(newTitle) {
          chart.setTitle(newTitle, true);
        }, true);

        scope.$watch('config.subtitle', function(newSubtitle) {
          chart.setTitle(true, newSubtitle);
        }, true);

        scope.$watch('config.loading', function(loading) {
          if (loading) {
            chart.showLoading();
          } else {
            chart.hideLoading();
          }
        });

        scope.$watch('config.credits.enabled', function(enabled) {
          if (enabled) {
            chart.credits.show();
          } else if (chart.credits) {
            chart.credits.hide();
          }
        });

        scope.$watch('config.useHighStocks', function(useHighStocks, oldUseHighStocks) {
          if (useHighStocks === oldUseHighStocks) {
            return;
          }
          initChart();
        });

        angular.forEach(axisNames, function(axisName) {
          scope.$watch('config.' + axisName, function(newAxes, oldAxes) {
            if (newAxes === oldAxes) {
              return;
            }
            if (newAxes) {
              chart[axisName][0].update(newAxes, false);
              updateZoom(chart[axisName][0], angular.copy(newAxes));
              chart.redraw();
            }
          }, true);
        });
        scope.$watch('config.options', function(newOptions, oldOptions, scope) {
          //do nothing when called on registration
          if (newOptions === oldOptions) {
            return;
          }
          initChart();
          processSeries(scope.config.series);
          chart.redraw();
        }, true);

        scope.$watch('config.size', function(newSize, oldSize) {
          if (newSize === oldSize) {
            return;
          }
          if (newSize) {
            chart.setSize(newSize.width || undefined, newSize.height || undefined);
          }
        }, true);

        scope.$on('highchartsng.reflow', function() {
          chart.reflow();
        });

        scope.$on('$destroy', function() {
          if (chart) {
            chart.destroy();
          }
          element.remove();
        });

      }
    };
  });
angular.module('directives.highcharts', []);
angular.module('directives.highcharts').directive('highcharts',['$rootScope',
  function($rootScope) {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        chartData: "=value"
      },
      transclude: true,
      replace: true,

      link: function(scope, element, attrs) {
        var chartsDefaults = {
            exporting: {
            enabled : false
      },
          chart: {
            renderTo: 'highcharts',

            events: {
              load: function() {
                //bilfingerlogo
                //calculate width
                //130 px
             /*   var picturewidth = 130;
                var pictureheight = 130;
                var alingTop = 1;
                var highchartswidth = document.getElementById('highcharts').offsetWidth;
                if ($rootScope.smileyColorValue === 1) {
                  this.renderer.image('/assets/img/smileyGreen.svg', highchartswidth - picturewidth, alingTop, picturewidth, pictureheight).add();
                } else if ($rootScope.smileyColorValue === 2) {
                  this.renderer.image('/assets/img/smileyYellow.svg', highchartswidth - picturewidth,alingTop, picturewidth, pictureheight).add();
                } else if ($rootScope.smileyColorValue === 3) {
                  this.renderer.image('/assets/img/smileyRed.svg', highchartswidth - picturewidth, alingTop, picturewidth, pictureheight).add();
                } else {
                  this.renderer.image('/assets/img/smileyYellow.svg', highchartswidth - picturewidth, alingTop, picturewidth, pictureheight).add();
                }*/
                //this.renderer.image('/assets/img/Bilfinger_Logo.svg', userwidth-150, 10, 143, 57)
                //.add();
              }
            },
            type: attrs.type || null,
            height: attrs.height || null,
            width: attrs.width || null,
            title: attrs.title || null
          }
        };

        //Update when charts data changes
        scope.$watch(function() {
          return scope.chartData;
        }, function(value) {
          if (!value) {
            return;
          }
          // We need deep copy in order to NOT override original chart object.
          // This allows us to override chart data member and still the keep
          // our original renderTo will be the same
          var deepCopy = true;
          var newSettings = {};
          $.extend(deepCopy, newSettings, chartsDefaults, scope.chartData);
          var chart = new Highcharts.Chart(newSettings);
          console.log("New Highcharts");
        });
      }
    };
  }
]);

angular.module('services.console', []).factory('Console', function() {
  return window.debug; // assumes JavaScript Debug has already been loaded on the page
});

angular.module('templates.app', ['datainput/capacity.tpl.html', 'datainput/customersatisfaction.tpl.html', 'datainput/datainput.tpl.html', 'datainput/deliveryreliabilitylogistics.tpl.html', 'datainput/deliveryreliabilityupstreamconstruction.tpl.html', 'datainput/ideasprocessimprovements.tpl.html', 'datainput/labourproductivity.tpl.html', 'datainput/numberproducedcabinets.tpl.html', 'datainput/portfolio.tpl.html', 'datainput/processingtime.tpl.html', 'datainput/remainingpoints.tpl.html', 'datainput/scrappedmaterial.tpl.html', 'datainput/upstreamprocessmistakes.tpl.html', 'datainput/workingstepmistakes.tpl.html', 'delete/delete.tpl.html', 'options/options.tpl.html', 'statsview/capacity.tpl.html', 'statsview/customersatisfaction.tpl.html', 'statsview/deliveryreliabilitylogistics.tpl.html', 'statsview/deliveryreliabilityupstreamconstruction.tpl.html', 'statsview/ideasprocessimprovements.tpl.html', 'statsview/labourproductivity.tpl.html', 'statsview/numberproducedcabinets.tpl.html', 'statsview/portfolio.tpl.html', 'statsview/processingtime.tpl.html', 'statsview/remainingpoints.tpl.html', 'statsview/scrappedmaterial.tpl.html', 'statsview/upstreamprocessmistakes.tpl.html', 'statsview/workingstepmistakes.tpl.html']);

angular.module("datainput/capacity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/capacity.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_capacity' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_capacity.percent' | translate}}\" ng:model=\"data.percent\" ng:change=\"checkPercentInput()\">\n" +
    "      <span class=\"help-inline\">{{'_capacity.percent.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/customersatisfaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/customersatisfaction.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_customer.satisfaction' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_customer.name' | translate}}\" ng:model=\"data.customername\" ng:change=\"checkCustomernameInput()\">\n" +
    "      <span class=\"help-inline\">{{'_customer.name.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_customer.satisfaction' | translate}}\" ng:model=\"data.customersatisfaction\" ng:change=\"checkCustomerSatisfactionInput()\">{{test}}\n" +
    "      <span class=\"help-inline\">{{'_customer.satisfaction.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_projectnumber' | translate}}\" ng:model=\"data.projectnumber\" ng:change=\"checkProjectnumberInput()\">\n" +
    "      <span class=\"help-inline\">{{'_customer.profjectnumber.input' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div id=\"serverResponse\">\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/datainput.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/datainput.tpl.html",
    "<!-- Single button -->\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "    <div class=\"btn-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        {{'_data.input' | translate}}\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li><a href=\"#/datainput-customersatisfaction\">{{'_customer.satisfaction' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-workingstepmistakes\">{{'_workingstepmistake' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-remainingpoints\">{{'_remainingPoints' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-processingtime\">{{'_processing.time' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-upstreamprocessmistakes\">{{'_upstream.process.mistakes.headline' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-portfolio\">{{'_portfolio' | translate}} / {{'_portfolio.title' | translate}}</a>\n" +
    "        </li>\n" +
    "        <!--\n" +
    "        <li><a href=\"#/datainput-labourproductivity\">{{'_labour.productivity' | translate}}</a>\n" +
    "        </li>\n" +
    "      -->\n" +
    "        <li><a href=\"#/datainput-scrappedmaterial\">{{'_scrapped.material' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-deliveryreliabilitylogistics\">{{'_delivery.reliability.logistics' | translate}} / {{'_delivery.reliability.logistics.title' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-capacity\">{{'_capacity' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li><a href=\"#/datainput-ideasprocessimprovements\">{{'_ideas.process.improvements' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li><a href=\"#/datainput-numberproducedcabinets\">{{'_number.produced.cabinets' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li><a href=\"#/datainput-deliveryreliabilityupstreamconstruction\">{{'_delivery.reliability.upstream.construction' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "\n" +
    "      </ul>\n" +
    "      <button class='btn btn-default' ng:click='goToDataDelete()'>{{'_data.delete'| translate}}</button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("datainput/deliveryreliabilitylogistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/deliveryreliabilitylogistics.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_delivery.reliability.logistics' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.logistics.number.commissioning.trolleys' | translate}}\" ng:model=\"data.numberCommissioningTrolleys\" ng:change=\"checkNumberCommissioningTrolleysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.logistics.number.commissioning.trolleys.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.logistics.number.incomplete.commissioning.trolleys' | translate}}\" ng:model=\"data.numberIncompleteCommissioningTrolleys\" ng:change=\"checkNumberIncompleteCommissioningTrolleysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.logistics.number.incomplete.commissioning.trolleys.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/deliveryreliabilityupstreamconstruction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/deliveryreliabilityupstreamconstruction.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_delivery.reliability.upstream.construction' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_delivery.reliability.upstream.construction.deviation.in.days' | translate}}\" ng:model=\"data.deviationInDays\" ng:change=\"checkDeviationInDaysInput()\">\n" +
    "      <span class=\"help-inline\">{{'_delivery.reliability.upstream.construction.deviation.in.days.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/ideasprocessimprovements.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/ideasprocessimprovements.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_ideas.process.improvements' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_ideas.process.improvements.ideas.overall' | translate}}\" ng:model=\"data.overallIdeas\" ng:change=\"checkOverallIdeasInput()\">\n" +
    "      <span class=\"help-inline\">{{'_ideas.process.improvements.ideas.overall.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_ideas.process.improvements.implemented.ideas' | translate}}\" ng:model=\"data.implementedIdeas\" ng:change=\"checkImplementedIdeasInput()\">\n" +
    "      <span class=\"help-inline\">{{'_ideas.process.improvements.implemented.ideas.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/labourproductivity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/labourproductivity.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_labour.productivity' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_labour.productivity.avg.employee' | translate}}\" ng:model=\"data.avgEmployee\" ng:change=\"checkAvgEmployeeInput()\">\n" +
    "      <span class=\"help-inline\">{{'_labour.productivity.avg.employee.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_labour.productivity.completed.cabinets' | translate}}\" ng:model=\"data.completedCabinets\" ng:change=\"checkCompletedCabinetsInput()\">\n" +
    "      <span class=\"help-inline\">{{'_labour.productivity.completed.cabinets.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/numberproducedcabinets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/numberproducedcabinets.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_number.produced.cabinets' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_number.produced.cabinets.actual' | translate}}\" ng:model=\"data.actual\" ng:change=\"checkActualInput()\">\n" +
    "      <span class=\"help-inline\">{{'_number.produced.cabinets.actual.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_number.produced.cabinets.target' | translate}}\" ng:model=\"data.target\" ng:change=\"checkTargetInput()\">\n" +
    "      <span class=\"help-inline\">{{'_number.produced.cabinets.target.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/portfolio.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_portfolio' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_portfolio' | translate}}\" ng:model=\"data.portfolio\" ng:change=\"checkPortfolioInput()\">\n" +
    "      <span class=\"help-inline\">{{'_portfolio.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/processingtime.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/processingtime.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_processing.time' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_processing.time.ready.for.inspection' | translate}}\" ng:model=\"data.readyForInspection\" ng:change=\"checkReadyForInspectioninput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.ready.for.inspection.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_processing.time.remaining.points.finished' | translate}}\" ng:model=\"data.remainingPointsFinished\" ng:change=\"checkRemainingPointsFinishedInput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.remaining.points.finished.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control \" placeholder=\"{{'_processing.time.delivered' | translate}}\" ng:model=\"data.delivered\" ng:change=\"checkDeliveredInput()\">\n" +
    "      <span class=\"help-inline\">{{'_processing.time.delivered.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/remainingpoints.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/remainingpoints.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_remainingPoints' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_remainingPoints.production' | translate}}\" ng:model=\"data.production\" ng:change=\"checkProductionInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.production.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_remainingPoints.construction' | translate}}\" ng:model=\"data.construction\" ng:change=\"checkConstructionInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.construction.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" class=\"form-control \" placeholder=\"{{'_remainingPoints.byDelivery' | translate}}\" ng:model=\"data.byDelivery\" ng:change=\"checkByDeliveryInput()\">\n" +
    "      <span class=\"help-inline\">{{'_remainingPoints.byDelivery.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/scrappedmaterial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/scrappedmaterial.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_scrapped.material' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_scrapped.material.cost' | translate}}\" ng:model=\"data.cost\" ng:change=\"checkCostInput()\">\n" +
    "      <span class=\"help-inline\">{{'_scrapped.material.cost.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/upstreamprocessmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/upstreamprocessmistakes.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_upstream.process.mistakes' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_upstream.process.mistakes.percent' | translate}}\" ng:model=\"data.percent\" ng:change=\"checkPercentinput()\">\n" +
    "      <span class=\"help-inline\">{{'_upstream.process.mistakes.percent.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-inline\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownMonthText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.months\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownMonthValue(value)\">{{'_'+value | translate}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownYearText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.years\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownYearValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("datainput/workingstepmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("datainput/workingstepmistakes.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_workingstepmistake' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <input type=\"text\" value=\"0\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.logistics' | translate}}\" ng:model=\"data.logistics\" ng:change=\"checkLogisticsInput()\">\n" +
    "      <span class=\"help-block \">{{'_workingstepmistake.logistics.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.mechanicalconstruction' | translate}}\" ng:model=\"data.mechanicalconstruction\" ng:change=\"checkMechanicalconstructionInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.mechanicalconstruction.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.assembly' | translate}}\" ng:model=\"data.assembly\" ng:change=\"checkAssemblyInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.assembly.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.finalassembly' | translate}}\" ng:model=\"data.finalassembly\" ng:change=\"checkFinalassemblyInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.finalassembly.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.check' | translate}}\" ng:model=\"data.check\" ng:change=\"checkCheckInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.check.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"{{'_workingstepmistake.rework' | translate}}\" ng:model=\"data.rework\" ng:change=\"checkReworkInput()\">\n" +
    "      <span class=\"help-block\">{{'_workingstepmistake.rework.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'_note' | translate}}\" ng:model=\"data.note\"></textarea>\n" +
    "      <span class=\"help-block\">{{'_note.input.help' | translate}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "\n" +
    "      <button class=\"{{buttonstate}}\" ng:Disabled=\"submitDisabled\" ng:click=\"submit('POST')\">Submit</button>\n" +
    "\n" +
    "      <div class=\"btn-group\">\n" +
    "        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "          {{dropdownCalendarWeekText}}\n" +
    "          <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "          <li role=\"presentation\" ng-repeat=\"value in inputData.calendarWeeks\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"setDropdownCalendarWeekValue(value)\">{{value}}</a>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-inline\">\n" +
    "      <div id=\"smileyGreen-normal\"></div>\n" +
    "      <div id=\"smileyYellow-normal\"></div>\n" +
    "      <div id=\"smileyRed-normal\"></div>\n" +
    "      <div class=\"radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" ng-value=\"1\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(1)\">{{'_over.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" ng-value=\"2\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(2)\">{{'_in.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "      <div class=\"radio\" id=\"smiley-radio\">\n" +
    "        <label>\n" +
    "          <input type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" ng-value=\"3\" ng-model=\"smiley.value\" ng:change=\"changeSmileyValue(3)\">{{'_under.target' | translate}}\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "  <div ng:include=\"dataResponseTemplate.url\">\n" +
    "  </div>\n" +
    "  <div>\n" +
    "    {{status}}\n" +
    "  </div>\n" +
    "  <div ng:include=\"updateTemplate.url\">\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("delete/delete.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("delete/delete.tpl.html",
    "<!-- Single button -->\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"form-horizontal\" role=\"form\" id=\"datainputform\">\n" +
    "    <div class=\"btn-group\">\n" +
    "      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        {{'_data.delete' | translate}}\n" +
    "\n" +
    "        <span class=\"caret\"></span>\n" +
    "      </button>\n" +
    "      <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.customerSatisfaction.getUrl, Urls.customerSatisfaction.templateUrl)\">{{'_customer.satisfaction' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.workingstepMistakes.getUrl, Urls.workingstepMistakes.templateUrl)\">{{'_workingstepmistake' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.remainingPoints.getUrl, Urls.remainingPoints.templateUrl)\">{{'_remainingPoints' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.processingTime.getUrl, Urls.processingTime.templateUrl)\">{{'_processing.time' | translate}}</a>\n" +
    "        </li>\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.upstreamProcessMistakes.getUrl, Urls.upstreamProcessMistakes.templateUrl)\">{{'_upstream.process.mistakes.headline' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.portfolio.getUrl, Urls.portfolio.templateUrl)\">{{'_portfolio' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.labourProductivity.getUrl, Urls.labourProductivity.templateUrl)\">{{'_labour.productivity' | translate}}</a>\n" +
    "        </li>\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.scrappedMaterial.getUrl, Urls.scrappedMaterial.templateUrl)\">{{'_scrapped.material' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.deliveryReliabilityLogistics.getUrl, Urls.deliveryReliabilityLogistics.templateUrl)\">{{'_delivery.reliability.logistics' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.capacity.getUrl, Urls.capacity.templateUrl)\">{{'_capacity' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "         <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.ideasProcessImprovements.getUrl, Urls.ideasProcessImprovements.templateUrl)\">{{'_ideas.process.improvements' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.numberProducedCabinets.getUrl, Urls.numberProducedCabinets.templateUrl)\">{{'_number.produced.cabinets' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "        <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" ng:click=\"getData(Urls.deliveryReliabilityUpstreamConstruction.getUrl, Urls.deliveryReliabilityUpstreamConstruction.templateUrl)\">{{'_delivery.reliability.upstream.construction' | translate}}</a>\n" +
    "        </li>\n" +
    "\n" +
    "\n" +
    "\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng:include=\"collection.url\" id=\"templateUrl\">\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("options/options.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("options/options.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"page-header\">\n" +
    "    <h3>{{'_options' | translate}}\n" +
    "    </h3>\n" +
    "  </div>\n" +
    "  <div class=\"form-horizontal\" role=\"form\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_views' | translate}}</h4>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.remainingPoints].active\">{{'_remainingPoints' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.workingstepMistakes].active\">{{'_workingstepmistake' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.upstreanProcessMistakes].active\">{{'_upstream.process.mistakes.headline' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.portfolio].active\">{{'_portfolio' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.labourProductivity].active\">{{'_labour.productivity' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.scrappedMaterial].active\">{{'_scrapped.material' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.deliveryReliabilityLogistics].active\">{{'_delivery.reliability.logistics' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.processingTime].active\">{{'_processing.time' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.capacity].active\">{{'_capacity' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.ideasProcessImprovements].active\">{{'_ideas.process.improvements' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.customerSatisfaction].active\">{{'_customer.satisfaction' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.numberProducedCabinets].active\">{{'_number.produced.cabinets' | translate}}\n" +
    "      </label>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"operatingNumbersOptions[operatingNumbersOptionsIndexes.deliveryReliabilityUpstreamConstruction].active\">{{'_delivery.reliability.upstream.construction' | translate}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group \">\n" +
    "      <h4>{{'_presentation.interval'| translate}}</h4>\n" +
    "      <input type=\"number\" min=\"0\" value=\"0\" class=\"form-control\" placeholder=\"{{'_presentation.interval' | translate}}\" ng:model=\"data.intervalTime\" ng:change=\"intervalTimeChange()\">\n" +
    "      <span class=\"help-block \">{{presentationIntervalStatus}}</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_options.updates' | translate}}</h4>\n" +
    "      <label class=\"checkbox\">\n" +
    "        <input type=\"checkbox\" ng:model=\"optionsUpdates.value\">{{'_get.server.updates' | translate}}\n" +
    "      </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{ '_options.send.to.server'| translate}}</h4>\n" +
    "      <button class=\"btn btn-primary\" ng:click=\"sendToServer()\">{{'_send.option.to.server' | translate}}</button>\n" +
    "      {{sendOptionsToServerStatus}}\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <h4>{{'_admin.password'| translate}}</h4>\n" +
    "      <input type=\"{{inputType}}\" class=\"form-control\" placeholder=\"{{'_admin.password.old' | translate}}\" ng:model=\"data.oldPassword\">\n" +
    "      <span class=\"help-block \">{{oldPasswordStatus}}</span>\n" +
    "\n" +
    "      <input type=\"password\" class=\"form-control\" placeholder=\"{{'_admin.password.new' | translate}}\" ng:model=\"data.newPasswordOne\">\n" +
    "      <span class=\"help-block \">{{newPasswordOneStatus}}</span>\n" +
    "\n" +
    "      <input type=\"password\" class=\"form-control\" placeholder=\"{{'_admin.password.repeat' | translate}}\" ng:model=\"data.newPasswordTwo\">\n" +
    "      <span class=\"help-block \">{{newPasswordTwoStatus}}</span>\n" +
    "      <button class=\"btn btn-primary\" ng:click=\"sendNewPassword()\">Submit</button>\n" +
    "      <span class=\"help-block \">{{submitStatus}}</span>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("statsview/capacity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/capacity.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/customersatisfaction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/customersatisfaction.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"pieChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("statsview/deliveryreliabilitylogistics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/deliveryreliabilitylogistics.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/deliveryreliabilityupstreamconstruction.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/deliveryreliabilityupstreamconstruction.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/ideasprocessimprovements.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/ideasprocessimprovements.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/labourproductivity.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/labourproductivity.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/numberproducedcabinets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/numberproducedcabinets.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"linecharts\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/portfolio.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/portfolio.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/processingtime.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/processingtime.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/remainingpoints.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/remainingpoints.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/scrappedmaterial.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/scrappedmaterial.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/upstreamprocessmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/upstreamprocessmistakes.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"lineChart\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module("statsview/workingstepmistakes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("statsview/workingstepmistakes.tpl.html",
    "<div id=\"parentStatsView\">\n" +
    "	<div id=\"highcharts\" >\n" +
    "	  <highcharts value=\"linecharts\" height=\"900\">\n" +
    "	  </highcharts>\n" +
    "	</div>\n" +
    "	<div id=\"smileyPicture\">\n" +
    "	<img ng-src=\"{{smileyPicturePath}}\" width=\"130\" height=\"130\">\n" +
    "	</div>\n" +
    "<div>");
}]);

angular.module('templates.common', []);

