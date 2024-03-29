var fantasy = fantasy || {},
    RORY_MCILROY = '3470',
    JORDAN_SPIETH = '5467',
    JIMMY_WALKER = '446',
    RICKIE_FOWLER = '3702',
    JB_HOLMES = '1067',
    PHIL_MICKELSON = '308',
    BUBBA_WATSON = '780',
    DUSTIN_JOHNSON = '3448',
    JASON_DAY = '1680',
    TIGER_WOODS = '462',
    ADAM_SCOTT = '388',
    HENRIK_STENSON = '576',
    PATRICK_REED = '5579',
    MATT_KUCHAR = '257',
    BRANDT_SNEDEKER = '1222',
    JUSTIN_ROSE = '569',
    JASON_DUFNER = '110',
    SERGIO_GARCIA = '158',
    LEE_WESTWOOD = '455',
    LOUIS_OOSTHUIZEN = '1293',
    BILLY_HORSCHEL = '1651',
    HIDEKI_MATSUYAMA = '5860',
    ZACH_JOHNSON = '686',
    JIM_FURYK = '153',
    CHRIS_KIRK = '3449',
    COREY_CONNERS = '9126',
    CHARL_SHWARTZEL = '1097',
    DANNY_WILLET = '4304',
    BROOKS_KOEPKA = '6798',
    KEVIN_KISNER = '2552',
    JUSTIN_THOMAS = '4848',
    BILL_HAAS = '774',
    JON_RAHM = '9780',
    MARC_LEISHMAN = '3351',
    ALEX_NOREN = '3832',
    MARTIN_KAYMER = '3670',
    GARY_WOODLAND = '3550',
    NIEBRUGGE = '9402',
    THOMAS_PIETERS = '9031',
    BRYSON_DECHAMBEAU = '10046',
    FABRIZIO_ZANOTTI = '1770',
    TONY_FINAU = '2230',
    CHARLEY_HOFFMAN = '205',
    PAUL_CASEY = '72',
    DANIEL_BERGER = '9025',
    KEVIN_CHAPPELL = '3857',
    RUSSELL_HENLEY = '5409',
    TOMMY_FLEETWOOD = '5539',
    IAN_POULTER = '619',
    XANDER_SCHAUFFELE = '10140',
    KIRADECH_APHIBARNRAT = '5771',
    FRANCESCO_MOLINARI = '1483',
    PATRICK_CANTLAY = '6007',
    SUNGJAE_IM = '11382',
    COLLIN_MORIKAWA = '10592',
    MATTHEW_FITZPATRICK = '9037',
    WEBB_SIMPSON = '1614',
    MATTHEW_WOLFF = '4412121',
    CAMERON_SMITH = '9131',
    SHANE_LOWRY = '4587',
    CAMERON_CHAMP = '11098',
    SCOTTIE_SCHEFFLER = '9478',
    MAX_HOMA = '8973',
    CARLOS_ORTIZ = '5532',
    VIKTOR_HOVLAND = '4364873',
    KH_LEE = '7083',
    ABRAHAM_ANCER = '9261',
    SAM_BURNS = '9938',
    CHEZ_REAVIE = '769',
    WILL_ZALATORIS = '9877',
    TYRRELL_HATTON = '5553',
    CAMERON_YOUNG = '4425906',
    TOM_HOGE = '6086',
    MIN_WOO_LEE = '4410932',
    MITO_PEREIRA = '9931',
    TOM_KIM = '4602673',
    PADRAIG_HARRINGTON = '186',
    ROBERT_MACINTYRE = '11378';

fantasy.config = {
    tournamentName: '2023 Open Championship',
    tournamentId: 401465539,
    firstPlaceValue: 50,
    showCut: false,
    apiKey: '_____',
    teams: [
        {
            name: 'JackG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                RICKIE_FOWLER,
                XANDER_SCHAUFFELE,
                COLLIN_MORIKAWA
            ]
        }, {
            name: 'JettaG',
            golfers: [
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                PATRICK_CANTLAY,
                XANDER_SCHAUFFELE,
                VIKTOR_HOVLAND
            ]
        }, {
            name: 'TedM',
            golfers: [
                CAMERON_SMITH,
                RORY_MCILROY,
                TOMMY_FLEETWOOD,
                JON_RAHM,
                JORDAN_SPIETH
            ]
        }, {
            name: 'CarolM',
            golfers: [
                JORDAN_SPIETH,
                XANDER_SCHAUFFELE,
                BROOKS_KOEPKA,
                CAMERON_SMITH,
                RORY_MCILROY
            ]
        }, {
            name: 'JB',
            golfers: [
                CAMERON_SMITH,
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                VIKTOR_HOVLAND,
                DUSTIN_JOHNSON
            ]
        }, {
            name: 'LauraG',
            golfers: [
                RORY_MCILROY,
                MATTHEW_FITZPATRICK,
                VIKTOR_HOVLAND,
                JASON_DAY,
                PADRAIG_HARRINGTON
            ]
        }, {
            name: 'JamesG',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                XANDER_SCHAUFFELE,
                JORDAN_SPIETH,
                RICKIE_FOWLER
            ]
        }, {
            name: 'LucyG',
            golfers: [
                RORY_MCILROY,
                TYRRELL_HATTON,
                SHANE_LOWRY,
                TOMMY_FLEETWOOD,
                LOUIS_OOSTHUIZEN
            ]
        }, {
            name: 'DaveG',
            golfers: [
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                BROOKS_KOEPKA,
                CAMERON_SMITH,
                RICKIE_FOWLER
            ]
        }, {
            name: 'GrantH',
            golfers: [
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                COLLIN_MORIKAWA,
                VIKTOR_HOVLAND,
                TOMMY_FLEETWOOD
            ]
        }, {
            name: 'JohnG',
            golfers: [
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                TOMMY_FLEETWOOD,
                MATTHEW_FITZPATRICK,
                MAX_HOMA
            ]
        }, {
            name: 'AdamP',
            golfers: [
                RORY_MCILROY,
                RICKIE_FOWLER,
                DUSTIN_JOHNSON,
                BROOKS_KOEPKA,
                TOM_KIM
            ]
        }, {
            name: 'BillT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                BROOKS_KOEPKA,
                RICKIE_FOWLER,
                VIKTOR_HOVLAND
            ]
        }, {
            name: 'ArchieT',
            golfers: [
                RORY_MCILROY,
                JON_RAHM,
                TYRRELL_HATTON,
                TOMMY_FLEETWOOD,
                JORDAN_SPIETH
            ]
        }, {
            name: 'GrantG',
            golfers: [
                RORY_MCILROY,
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                JORDAN_SPIETH,
                ROBERT_MACINTYRE
            ]
        }, {
            name: 'ChuckD',
            golfers: [
                RORY_MCILROY,
                TOMMY_FLEETWOOD,
                SHANE_LOWRY,
                JON_RAHM,
                COLLIN_MORIKAWA
            ]
        }
    ]
};