//var map = L.map('map').setView([-37.8138506,144.9638644], 14);
//
//L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
//    maxZoom: 18,
//    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//    id: 'examples.map-20v6611k'
//}).addTo(map);


var buffer = {
    "type": "FeatureCollection",

    "features": [
    { "type": "Feature", "properties": { "sensor_id": 1, "sensor_nam": "Bou292_T", "sensor_des": "Bourke Street Mall (North)", "Sensor_I_1": 1.0, "Ped_count": 805742.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964017816511273, -37.814394476207667 ], [ 144.964017816511273, -37.812593441809668 ], [ 144.966288583488904, -37.812593441809668 ], [ 144.966288583488904, -37.814394476207667 ], [ 144.964017816511273, -37.814394476207667 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 2, "sensor_nam": "Bou283_T", "sensor_des": "Bourke Street Mall (South)", "Sensor_I_1": 2.0, "Ped_count": 1045235.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964031811729228, -37.814706746159857 ], [ 144.964031811729228, -37.812905711857468 ], [ 144.966302588270992, -37.812905711857468 ], [ 144.966302588270992, -37.814706746159857 ], [ 144.964031811729228, -37.814706746159857 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 3, "sensor_nam": "Swa295_T", "sensor_des": "Melbourne Central", "Sensor_I_1": 3.0, "Ped_count": 1610909.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.963112653896133, -37.811953116581662 ], [ 144.963112653896133, -37.810152081435263 ], [ 144.965383346103977, -37.810152081435263 ], [ 144.965383346103977, -37.811953116581662 ], [ 144.963112653896133, -37.811953116581662 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 4, "sensor_nam": "Swa123_T", "sensor_des": "Town Hall (West)", "Sensor_I_1": 4.0, "Ped_count": 2071862.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964952395293267, -37.815779955995424 ], [ 144.964952395293267, -37.813978922022102 ], [ 144.967223204706784, -37.813978922022102 ], [ 144.967223204706784, -37.815779955995424 ], [ 144.964952395293267, -37.815779955995424 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 5, "sensor_nam": "PriNW_T", "sensor_des": "Princes Bridge", "Sensor_I_1": 5.0, "Ped_count": 1167587.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.966741136131191, -37.819642565403683 ], [ 144.966741136131191, -37.817841532614466 ], [ 144.969012063868945, -37.817841532614466 ], [ 144.969012063868945, -37.819642565403683 ], [ 144.966741136131191, -37.819642565403683 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 6, "sensor_nam": "FliS_T", "sensor_des": "Flinders Street Station Underpass", "Sensor_I_1": 6.0, "Ped_count": 1383829.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964447130393637, -37.820017115346275 ], [ 144.964447130393637, -37.818216082671825 ], [ 144.966718069606372, -37.818216082671825 ], [ 144.966718069606372, -37.820017115346275 ], [ 144.964447130393637, -37.820017115346275 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 7, "sensor_nam": "Fed_T", "sensor_des": "Birrarung Marr", "Sensor_I_1": 7.0, "Ped_count": 118103.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.970279342545496, -37.819223825467816 ], [ 144.970279342545496, -37.817422792550246 ], [ 144.972550257454714, -37.817422792550246 ], [ 144.972550257454714, -37.819223825467816 ], [ 144.970279342545496, -37.819223825467816 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 8, "sensor_nam": "WebBN_T", "sensor_des": "Webb Bridge", "Sensor_I_1": 8.0, "Ped_count": 91993.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.94603957189679, -37.823835504761234 ], [ 144.94603957189679, -37.822034473257418 ], [ 144.9483106281034, -37.822034473257418 ], [ 144.9483106281034, -37.823835504761234 ], [ 144.94603957189679, -37.823835504761234 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 9, "sensor_nam": "Col700_T", "sensor_des": "Southern Cross Station", "Sensor_I_1": 9.0, "Ped_count": 323937.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.949947318667569, -37.820782605229056 ], [ 144.949947318667569, -37.818981572789255 ], [ 144.952218281332648, -37.818981572789255 ], [ 144.952218281332648, -37.820782605229056 ], [ 144.949947318667569, -37.820782605229056 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 10, "sensor_nam": "BouHbr_T", "sensor_des": "Victoria Point", "Sensor_I_1": 10.0, "Ped_count": 239928.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.945970035790538, -37.819664805400294 ], [ 144.945970035790538, -37.817863772617784 ], [ 144.948240964209504, -37.817863772617784 ], [ 144.948240964209504, -37.819664805400294 ], [ 144.945970035790538, -37.819664805400294 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 11, "sensor_nam": "WatCit_T", "sensor_des": "Waterfront City", "Sensor_I_1": 11.0, "Ped_count": 105377.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.938443886461187, -37.816356635907084 ], [ 144.938443886461187, -37.814555602110488 ], [ 144.940714713539023, -37.814555602110488 ], [ 144.940714713539023, -37.816356635907084 ], [ 144.938443886461187, -37.816356635907084 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 12, "sensor_nam": "NewQ_T", "sensor_des": "New Quay", "Sensor_I_1": 12.0, "Ped_count": 182853.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.9417885998879, -37.815479946041421 ], [ 144.9417885998879, -37.813678911976126 ], [ 144.944059400112224, -37.813678911976126 ], [ 144.944059400112224, -37.815479946041421 ], [ 144.9417885998879, -37.815479946041421 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 13, "sensor_nam": "Wil277_T", "sensor_des": "Flagstaff Station", "Sensor_I_1": 13.0, "Ped_count": 603299.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.955512334136301, -37.813243546383944 ], [ 144.955512334136301, -37.811442511633174 ], [ 144.957783065863964, -37.811442511633174 ], [ 144.957783065863964, -37.813243546383944 ], [ 144.955512334136301, -37.813243546383944 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 14, "sensor_nam": "SanBri_T", "sensor_des": "Sandridge Bridge", "Sensor_I_1": 14.0, "Ped_count": 511571.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.961783515145839, -37.821012495193827 ], [ 144.961783515145839, -37.819211462824512 ], [ 144.964054484854273, -37.819211462824512 ], [ 144.964054484854273, -37.821012495193827 ], [ 144.961783515145839, -37.821012495193827 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 15, "sensor_nam": "QV_T", "sensor_des": "State Library", "Sensor_I_1": 15.0, "Ped_count": 824897.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.963335960162794, -37.811543856644334 ], [ 144.963335960162794, -37.809742821372481 ], [ 144.965606639837347, -37.809742821372481 ], [ 144.965606639837347, -37.811543856644334 ], [ 144.963335960162794, -37.811543856644334 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 16, "sensor_nam": "Col270_T", "sensor_des": "Australia on Collins", "Sensor_I_1": 16.0, "Ped_count": 656045.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964074982208444, -37.816634305864511 ], [ 144.964074982208444, -37.814833272153123 ], [ 144.966345817791535, -37.814833272153123 ], [ 144.966345817791535, -37.816634305864511 ], [ 144.964074982208444, -37.816634305864511 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 17, "sensor_nam": "Col15_T", "sensor_des": "Collins Place (South)", "Sensor_I_1": 17.0, "Ped_count": 490426.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.972100514504859, -37.814525496187571 ], [ 144.972100514504859, -37.81272446182976 ], [ 144.974371285495295, -37.81272446182976 ], [ 144.974371285495295, -37.814525496187571 ], [ 144.972100514504859, -37.814525496187571 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 18, "sensor_nam": "Col12_T", "sensor_des": "Collins Place (North)", "Sensor_I_1": 18.0, "Ped_count": 349339.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.971918117212567, -37.814348686214714 ], [ 144.971918117212567, -37.812547651802618 ], [ 144.97418888278753, -37.812547651802618 ], [ 144.97418888278753, -37.814348686214714 ], [ 144.971918117212567, -37.814348686214714 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 19, "sensor_nam": "LtB210_T", "sensor_des": "Chinatown-Swanston St (North)", "Sensor_I_1": 19.0, "Ped_count": 110879.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.964371333698978, -37.813272096379535 ], [ 144.964371333698978, -37.811471061637576 ], [ 144.966642066301006, -37.811471061637576 ], [ 144.966642066301006, -37.813272096379535 ], [ 144.964371333698978, -37.813272096379535 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 20, "sensor_nam": "LtB170_T", "sensor_des": "Chinatown-Russel St (South)", "Sensor_I_1": 20.0, "Ped_count": 122902.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.967111243543627, -37.81262920647805 ], [ 144.967111243543627, -37.810828171538901 ], [ 144.969381956456459, -37.810828171538901 ], [ 144.969381956456459, -37.81262920647805 ], [ 144.967111243543627, -37.81262920647805 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 21, "sensor_nam": "Rus180_T", "sensor_des": "Bourke St-Russel St (West)", "Sensor_I_1": 21.0, "Ped_count": 222201.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.966595332040924, -37.813380376363 ], [ 144.966595332040924, -37.811579341654181 ], [ 144.968866067959198, -37.811579341654181 ], [ 144.968866067959198, -37.813380376363 ], [ 144.966595332040924, -37.813380376363 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 22, "sensor_nam": "Eli274_T", "sensor_des": "Flinders St-Elizabeth St (East)", "Sensor_I_1": 22.0, "Ped_count": 224805.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.963932749580863, -37.818764525538143 ], [ 144.963932749580863, -37.816963492479829 ], [ 144.966203650419288, -37.816963492479829 ], [ 144.966203650419288, -37.818764525538143 ], [ 144.963932749580863, -37.818764525538143 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 23, "sensor_nam": "Col623_T", "sensor_des": "Spencer St-Collins St (South)", "Sensor_I_1": 23.0, "Ped_count": 27576.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.953392030768782, -37.819992635350047 ], [ 144.953392030768782, -37.818191602668094 ], [ 144.955662969231298, -37.818191602668094 ], [ 144.955662969231298, -37.819992635350047 ], [ 144.953392030768782, -37.819992635350047 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 24, "sensor_nam": "Col620_T", "sensor_des": "Spencer St-Collins St (North)", "Sensor_I_1": 24.0, "Ped_count": 59249.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.953356534030604, -37.819779695382692 ], [ 144.953356534030604, -37.817978662635483 ], [ 144.955627465969428, -37.817978662635483 ], [ 144.955627465969428, -37.819779695382692 ], [ 144.953356534030604, -37.819779695382692 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 25, "sensor_nam": "MCEC_T", "sensor_des": "Melbourne Convention Exhibition Centre", "Sensor_I_1": 25.0, "Ped_count": 59625.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.954795855097359, -37.824931954593239 ], [ 144.954795855097359, -37.823130923425595 ], [ 144.957066944902863, -37.823130923425595 ], [ 144.957066944902863, -37.824931954593239 ], [ 144.954795855097359, -37.824931954593239 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 26, "sensor_nam": "Eli483_T", "sensor_des": "QV Market-Elizabeth St (West)", "Sensor_I_1": 26.0, "Ped_count": 72922.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.959358689994474, -37.809595496942848 ], [ 144.959358689994474, -37.807794461073797 ], [ 144.961629310005605, -37.807794461073797 ], [ 144.961629310005605, -37.809595496942848 ], [ 144.959358689994474, -37.809595496942848 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 27, "sensor_nam": "Vic_T", "sensor_des": "QV Market-Peel St", "Sensor_I_1": 27.0, "Ped_count": 17684.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.955495328131178, -37.807104457324442 ], [ 144.955495328131178, -37.805303420691814 ], [ 144.957765871869128, -37.805303420691814 ], [ 144.957765871869128, -37.807104457324442 ], [ 144.955495328131178, -37.807104457324442 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 28, "sensor_nam": "VAC_T", "sensor_des": "The Arts Centre", "Sensor_I_1": 28.0, "Ped_count": 73041.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.967657596964273, -37.822199315011972 ], [ 144.967657596964273, -37.820398283006568 ], [ 144.969928603035783, -37.820398283006568 ], [ 144.969928603035783, -37.822199315011972 ], [ 144.967657596964273, -37.822199315011972 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 29, "sensor_nam": "AG", "sensor_des": "St. Kilda Rd-Alexandra Gardens", "Sensor_I_1": 29.0, "Ped_count": 39343.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.967499022105812, -37.820558155263427 ], [ 144.967499022105812, -37.818757122754789 ], [ 144.969769977894202, -37.818757122754789 ], [ 144.969769977894202, -37.820558155263427 ], [ 144.967499022105812, -37.820558155263427 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 30, "sensor_nam": "Lon189_", "sensor_des": "Lonsdale St (South)", "Sensor_I_1": 30.0, "Ped_count": 159340.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.965432751362869, -37.812118566556364 ], [ 144.965432751362869, -37.810317531460612 ], [ 144.967703448637167, -37.810317531460612 ], [ 144.967703448637167, -37.812118566556364 ], [ 144.965432751362869, -37.812118566556364 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 31, "sensor_nam": "Lyg161_", "sensor_des": "Lygon St (West)", "Sensor_I_1": 31.0, "Ped_count": 92714.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.965453897127759, -37.802596878014867 ], [ 144.965453897127759, -37.800795840000603 ], [ 144.967724302872284, -37.800795840000603 ], [ 144.967724302872284, -37.802596878014867 ], [ 144.965453897127759, -37.802596878014867 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 32, "sensor_nam": "CSq", "sensor_des": "City Square", "Sensor_I_1": 32.0, "Ped_count": 162604.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.965721782159676, -37.816637495863972 ], [ 144.965721782159676, -37.814836462153551 ], [ 144.967992617840423, -37.814836462153551 ], [ 144.967992617840423, -37.816637495863972 ], [ 144.965721782159676, -37.816637495863972 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 33, "sensor_nam": "Spr13_", "sensor_des": "Flinders St-Spring St (West)", "Sensor_I_1": 33.0, "Ped_count": 7143.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.973405196018575, -37.815732596002704 ], [ 144.973405196018575, -37.813931562014886 ], [ 144.975676003981562, -37.813931562014886 ], [ 144.975676003981562, -37.815732596002704 ], [ 144.973405196018575, -37.815732596002704 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 34, "sensor_nam": "Fli32", "sensor_des": "Flinders St-Spark La", "Sensor_I_1": 34.0, "Ped_count": 13650.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.973015087635986, -37.816279925918764 ], [ 144.973015087635986, -37.814478892098805 ], [ 144.975285912364029, -37.814478892098805 ], [ 144.975285912364029, -37.816279925918764 ], [ 144.973015087635986, -37.816279925918764 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 35, "sensor_nam": "SouthB", "sensor_des": "Southbank", "Sensor_I_1": 0.0, "Ped_count": 0.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.963940913402666, -37.821126275176312 ], [ 144.963940913402666, -37.819325242841956 ], [ 144.966211886597193, -37.819325242841956 ], [ 144.966211886597193, -37.821126275176312 ], [ 144.963940913402666, -37.821126275176312 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 36, "sensor_nam": "Que85", "sensor_des": "Queen St (West)", "Sensor_I_1": 36.0, "Ped_count": 10733.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.960141470927169, -37.817370875751635 ], [ 144.960141470927169, -37.815569842266086 ], [ 144.962412329073004, -37.815569842266086 ], [ 144.962412329073004, -37.817370875751635 ], [ 144.960141470927169, -37.817370875751635 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 37, "sensor_nam": "Lyg260", "sensor_des": "Lygon St (East)", "Sensor_I_1": 37.0, "Ped_count": 3820.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.96598810250714, -37.802245408068757 ], [ 144.96598810250714, -37.800444369946774 ], [ 144.968258497493025, -37.800444369946774 ], [ 144.968258497493025, -37.802245408068757 ], [ 144.96598810250714, -37.802245408068757 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 38, "sensor_nam": "Swa11", "sensor_des": "Flinders St-Swanston St (West)", "Sensor_I_1": 38.0, "Ped_count": 127749.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.96601236141737, -37.817991755656578 ], [ 144.96601236141737, -37.816190722361227 ], [ 144.968283238582785, -37.816190722361227 ], [ 144.968283238582785, -37.817991755656578 ], [ 144.96601236141737, -37.817991755656578 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 39, "sensor_nam": "AlfredP_T", "sensor_des": "Alfred Place", "Sensor_I_1": 39.0, "Ped_count": 8650.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.969195211103056, -37.814747626153576 ], [ 144.969195211103056, -37.812946591863749 ], [ 144.971465988896966, -37.812946591863749 ], [ 144.971465988896966, -37.814747626153576 ], [ 144.969195211103056, -37.814747626153576 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 40, "sensor_nam": "Spr201", "sensor_des": "Lonsdale St-Spring St (West)", "Sensor_I_1": 40.0, "Ped_count": 6747.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.971140570121065, -37.810893486743964 ], [ 144.971140570121065, -37.809092451272818 ], [ 144.973411229879048, -37.809092451272818 ], [ 144.973411229879048, -37.810893486743964 ], [ 144.971140570121065, -37.810893486743964 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 41, "sensor_nam": "FGIC", "sensor_des": "Fitzroy Gardens Visitor Centre", "Sensor_I_1": 0.0, "Ped_count": 0.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.979948814406384, -37.814531926186589 ], [ 144.979948814406384, -37.812730891830711 ], [ 144.982219585593612, -37.812730891830711 ], [ 144.982219585593612, -37.814531926186589 ], [ 144.979948814406384, -37.814531926186589 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 42, "sensor_nam": "UM1", "sensor_des": "Grattan St-Swanston St (West)", "Sensor_I_1": 42.0, "Ped_count": 779.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.962728921785697, -37.800985728261708 ], [ 144.962728921785697, -37.799184689753645 ], [ 144.964999278214464, -37.799184689753645 ], [ 144.964999278214464, -37.800985728261708 ], [ 144.962728921785697, -37.800985728261708 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 43, "sensor_nam": "UM2", "sensor_des": "Monash Rd-Swanston St (West)", "Sensor_I_1": 43.0, "Ped_count": 423.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.962982646889031, -37.79934532851297 ], [ 144.962982646889031, -37.797544289502071 ], [ 144.965252953110962, -37.797544289502071 ], [ 144.965252953110962, -37.79934532851297 ], [ 144.962982646889031, -37.79934532851297 ] ] ] } },
    { "type": "Feature", "properties": { "sensor_id": 44, "sensor_nam": "UM3", "sensor_des": "Tin Alley-Swanston St (West)", "Sensor_I_1": 44.0, "Ped_count": 377.0 }, "geometry": { "type": "Polygon", "coordinates": [ [ [ 144.963218771717038, -37.797722798761527 ], [ 144.963218771717038, -37.795921759253361 ], [ 144.965489028283059, -37.795921759253361 ], [ 144.965489028283059, -37.797722798761527 ], [ 144.963218771717038, -37.797722798761527 ] ] ] } }
]
};



var map = L.mapbox.map('map', 'cityscience.j0g767m0')
              .setView([-37.8138506,144.9638644], 14);

L.mapbox.tileLayer('cityscience.iagjdpp2').addTo(map);

var layerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x'];
var indexTable = {'a':a,'b':b,'c':c,'d':d,'e':e,'f':f,'g':g,'h':h,'i':i,'j':j,'k':k,'l':l,'m':m,'n':n,'o':o,'p':p,'q':q,'r':r,'s':s,'t':t,'u':u, 'v':v,'w':w,'x':x};


createAllLayers(layerArray);




L.geoJson(buffer,{style: myStyle}
).addTo(map);


function showCurrentCrash(layerArray,index)
{

    console.log(index);
    for(var i=0; i<layerArray.length;i++)
    {
        if(index == i)
        {
            $('.'+layerArray[i]).show();
        }
        else
        {
            $('.'+layerArray[i]).hide();
        }

    }
}


function createLayer(geojson,className)
{

    return   L.geoJson(geojson, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 4,
                fillColor: "#000000",
                color: "#5964ff",
                weight: 1,
                opacity: 0,
                fillOpacity: 1,
                className: className
            });
        }
    }).addTo(map);
}


function createAllLayers(layerArray)
{
    for(var i= 0; i < layerArray.length; i++)
    {
        createLayer(indexTable[layerArray[i]],layerArray[i]);
    }

}