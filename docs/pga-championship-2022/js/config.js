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
    JOAQUIN_NIEMANN = '11099',
    CAMERON_YOUNG = '4425906';

fantasy.config = {
    tournamentName: '2022 PGA Championship',
    tournamentId: 401353226,
    firstPlaceValue: 50,
    showCut: false,
    apiKey: '_____',
    teams: [
        {
            name: 'JackG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                COLLIN_MORIKAWA,
                BROOKS_KOEPKA,
                TIGER_WOODS
            ]
        },
        {
            name: 'JB',
            golfers: [
                PATRICK_CANTLAY,
                JORDAN_SPIETH,
                COLLIN_MORIKAWA,
                RORY_MCILROY,
                JOAQUIN_NIEMANN
            ]
        },
        {
            name: 'DaveG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                JUSTIN_THOMAS,
                SHANE_LOWRY,
                CAMERON_SMITH
            ]
        },
        {
            name: 'MatT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                JORDAN_SPIETH,
                XANDER_SCHAUFFELE,
                HIDEKI_MATSUYAMA
            ]
        },
        {
            name: 'MatT2',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                DUSTIN_JOHNSON,
                JORDAN_SPIETH,
                HIDEKI_MATSUYAMA
            ]
        },
        {
            name: 'ClayT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JUSTIN_THOMAS,
                JORDAN_SPIETH,
                HIDEKI_MATSUYAMA,
                BROOKS_KOEPKA
            ]
        },
        {
            name: 'SamT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                JORDAN_SPIETH,
                WILL_ZALATORIS,
                BROOKS_KOEPKA
            ]
        },
        {
            name: 'AngelaT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                JORDAN_SPIETH,
                XANDER_SCHAUFFELE,
                HIDEKI_MATSUYAMA
            ]
        },
        {
            name: 'BillT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JUSTIN_THOMAS,
                JORDAN_SPIETH,
                XANDER_SCHAUFFELE,
                HIDEKI_MATSUYAMA
            ]
        }, {
            name: 'CarolM',
            golfers: [
                RORY_MCILROY,
                XANDER_SCHAUFFELE,
                JORDAN_SPIETH,
                COLLIN_MORIKAWA,
                HIDEKI_MATSUYAMA
            ]
        }, {
            name: 'JettaG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                RORY_MCILROY,
                COLLIN_MORIKAWA,
                PATRICK_CANTLAY
            ]
        }, {
            name: 'TedM',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JORDAN_SPIETH,
                JON_RAHM,
                PATRICK_CANTLAY,
                VIKTOR_HOVLAND
            ]
        }, {
            name: 'JohnG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JUSTIN_THOMAS,
                JORDAN_SPIETH,
                DUSTIN_JOHNSON,
                CAMERON_SMITH
            ]
        }, {
            name: 'AdamP',
            golfers: [
                TIGER_WOODS,
                BROOKS_KOEPKA,
                JON_RAHM,
                CAMERON_SMITH,
                JORDAN_SPIETH
            ]
        }, {
            name: 'GrantH',
            golfers: [
                JON_RAHM,
                JUSTIN_THOMAS,
                CAMERON_SMITH,
                TONY_FINAU,
                VIKTOR_HOVLAND
            ]
        }, {
            name: 'GrantG',
            golfers: [
                CAMERON_SMITH,
                RORY_MCILROY,
                JORDAN_SPIETH,
                HIDEKI_MATSUYAMA,
                CAMERON_YOUNG
                
            ]
        }, {
            name: 'MeaganG',
            golfers: [
                RORY_MCILROY,
                HIDEKI_MATSUYAMA,
                COLLIN_MORIKAWA,
                BUBBA_WATSON,
                LEE_WESTWOOD
                
            ]
        }
    ]
};