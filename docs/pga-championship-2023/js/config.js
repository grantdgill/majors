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
    TOM_KIM = '4602673';

fantasy.config = {
    tournamentName: '2023 PGA Championship',
    tournamentId: 401465523,
    firstPlaceValue: 50,
    showCut: false,
    apiKey: '_____',
    teams: [
        {
            name: 'JackG',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                JUSTIN_THOMAS,
                JASON_DAY,
                ADAM_SCOTT
            ]
        }, {
            name: 'JettaG',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                TONY_FINAU,
                VIKTOR_HOVLAND,
                COLLIN_MORIKAWA
            ]
        }, {
            name: 'JohnG',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                XANDER_SCHAUFFELE,
                CAMERON_YOUNG,
                SAM_BURNS
            ]
        }, {
            name: 'LauraG',
            golfers: [
                RORY_MCILROY,
                COLLIN_MORIKAWA,
                TONY_FINAU,
                MAX_HOMA,
                KH_LEE
            ]
        }, {
            name: 'JamesG',
            golfers: [
                RICKIE_FOWLER,
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                MATTHEW_FITZPATRICK,
                JUSTIN_THOMAS
            ]
        }, {
            name: 'LucyG',
            golfers: [
                BROOKS_KOEPKA,
                RORY_MCILROY,
                SUNGJAE_IM,
                MITO_PEREIRA,
                DUSTIN_JOHNSON
            ]
        }, {
            name: 'CarolM',
            golfers: [
                JUSTIN_THOMAS,
                CAMERON_YOUNG,
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                XANDER_SCHAUFFELE
            ]
        }, {
            name: 'JB',
            golfers: [
                JON_RAHM,
                TONY_FINAU,
                DUSTIN_JOHNSON,
                CAMERON_YOUNG,
                COLLIN_MORIKAWA
            ]
        }, {
            name: 'BillT',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                TONY_FINAU,
                TOM_KIM,
                JORDAN_SPIETH
            ]
        }, {
            name: 'AdamP',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                BROOKS_KOEPKA,
                TONY_FINAU,
                JUSTIN_THOMAS
            ]
        }, {
            name: 'GrantG',
            golfers: [
                JON_RAHM,
                RORY_MCILROY,
                TONY_FINAU,
                CAMERON_YOUNG,
                MAX_HOMA
            ]
        }, {
            name: 'DaveG',
            golfers: [
                XANDER_SCHAUFFELE,
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                TONY_FINAU,
                JASON_DAY
            ]
        }, {
            name: 'MatT',
            golfers: [
                JON_RAHM,
                SCOTTIE_SCHEFFLER,
                XANDER_SCHAUFFELE,
                MATTHEW_FITZPATRICK,
                JORDAN_SPIETH
            ]
        }, {
            name: 'TedM',
            golfers: [
                JON_RAHM,
                RORY_MCILROY,
                BROOKS_KOEPKA,
                JUSTIN_THOMAS,
                SCOTTIE_SCHEFFLER
            ]
        }
    ]
};