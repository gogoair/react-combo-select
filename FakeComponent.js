import React, {Component} from 'react';
import ComboSelect from './Components/ComboSelect.jsx';

export default class FakeComponent extends Component {

    fakeFunction(value) {
        //console.log(value);
    }

    render() {
        //var standardArray = ["DDD", "CCC", "BBB", "AAA"];
        //var standardArray = [3, 1, 11, 111, 21, 33, 14, 32, 442];
        // var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D", "JA219J", "JA302J", "JA306J", "JA308J", "JA309J", "JA311J", "JA313J", "JA314J", "JA316J", "JA318J", "JA319J", "JA322J", "JA324J", "JA325J", "JA326J"];
        //var standardArray = ["JA007D", "JA008D", "JA009D", "JA010D"];
        //var standardArray = [];
        // var standardArray = [
        //     {text: "air-JA007D", win: "win-JA007D", value: "JA007D"},
        //     {text: "air-JA008D", win: "win-JA008D", value: "JA008D"},
        //     {text: "air-JA009D", win: "win-JA009D", value: "JA009D"},
        //     {text: "air-JA107D", win: "win-JA107D", value: "JA010D"}
        // ];

        var standardArray = ["N1200K", "N1201P", "N121DE", "N124DE", "N125DL", "N126DL", "N127DL", "N128DL", "N129DL", "N130DL", "N131EV", "N132EV", "N133EV", "N134EV", "N135EV", "N136DL", "N136EV", "N137DL", "N137EV", "N138DL", "N138EV", "N139DL", "N1402A", "N140LL", "N143DA", "N144DA", "N146PQ", "N147PQ", "N1501P", "N152DL", "N153DL", "N153PQ", "N154DL", "N155DL", "N156DL", "N1602", "N1603", "N1604R", "N1605", "N16065", "N1607B", "N1608", "N1609", "N1610D", "N1611B", "N1612T", "N1613B", "N161PQ", "N162PQ", "N166PQ", "N169DZ", "N170PQ", "N171DN", "N171DZ", "N172DN", "N172DZ", "N173DZ", "N174DN", "N174DZ", "N175DN", "N175DZ", "N176DN", "N176DZ", "N176PQ", "N177DN", "N177DZ", "N178DN", "N178DZ", "N179DN", "N180DN", "N181DN", "N181GJ", "N181PQ", "N182DN", "N182GJ", "N183DN", "N183GJ", "N184DN", "N184GJ", "N185DN", "N185GJ", "N186DN", "N186GJ", "N186PQ", "N187DN", "N187GJ", "N187PQ", "N188DN", "N189DN", "N190DN", "N191DN", "N192DN", "N193DN", "N194DN", "N195DN", "N195PQ", "N196DN", "N197DN", "N197PQ", "N198DN", "N199DN", "N200PQ", "N201JQ", "N202JQ", "N203JQ", "N204JQ", "N206JQ", "N207JQ", "N208JQ", "N209JQ", "N210JQ", "N211JQ", "N212JQ", "N213JQ", "N214JQ", "N215JQ", "N216JQ", "N228PQ", "N232PQ", "N272PQ", "N279PQ", "N292PQ", "N293PQ", "N294PQ", "N295PQ", "N296PQ", "N297PQ", "N298PQ", "N299PQ", "N300PQ", "N301DN", "N301DQ", "N301NB", "N301PQ", "N302DQ", "N302NB", "N302PQ", "N303DQ", "N303PQ", "N304DQ", "N304PQ", "N305DQ", "N305PQ", "N306DQ", "N306PQ", "N307DQ", "N307PQ", "N308DE", "N308PQ", "N309DE", "N309PQ", "N309US", "N310DE", "N310NW", "N310PQ", "N311PQ", "N311US", "N312US", "N313PQ", "N313US", "N314NB", "N314PQ", "N314US", "N315NB", "N315PQ", "N315US", "N316NB", "N316PQ", "N316US", "N317CA", "N317NB", "N317US", "N318NB", "N318US", "N319NB", "N319PQ", "N319US", "N320NB", "N320PQ", "N320US", "N321NB", "N321US", "N322NB", "N322US", "N323NB", "N323US", "N324NB", "N324PQ", "N324US", "N325NB", "N325PQ", "N325US", "N326NB", "N326PQ", "N326US", "N327NB", "N327NW", "N328NB", "N328NW", "N329NB", "N329NW", "N329PQ", "N330NB", "N330NW", "N330PQ", "N331CA", "N331NB", "N331NW", "N331PQ", "N332NB", "N332NW", "N333NB", "N333NW", "N334NB", "N334NW", "N335NB", "N335NW", "N335PQ", "N336NB", "N336NW", "N336PQ", "N337NB", "N337NW", "N337PQ", "N338NB", "N338NW", "N339NB", "N339NW", "N340CA", "N340NB", "N340NW", "N341NB", "N341NW", "N341PQ", "N342NB", "N342NW", "N343NB", "N343NW", "N344NB", "N344NW", "N345NB", "N345NW", "N346NB", "N347NB", "N347NW", "N348NB", "N348NW", "N348PQ", "N349NB", "N349NW", "N349PQ", "N350NA", "N351NB", "N351NW", "N352NB", "N352NW", "N353NB", "N353NW", "N354CA", "N354NB", "N354NW", "N355CA", "N355NB", "N355NW", "N356NW", "N357NB", "N357NW", "N358NB", "N358NW", "N359NB", "N359NW", "N360NB", "N360NW", "N361NB", "N361NW", "N362NB", "N362NW", "N363NB", "N363NW", "N364NB", "N364NW", "N365NB", "N365NW", "N366NB", "N366NW", "N367CA", "N367NW", "N368CA", "N368NB", "N368NW", "N369CA", "N369NB", "N369NW", "N370NB", "N370NW", "N371CA", "N371DA", "N371NB", "N371NW", "N372DA", "N372NW", "N3730B", "N3731T", "N3732J", "N3733Z", "N3734B", "N3735D", "N3736C", "N3737C", "N3738B", "N3739P", "N373DA", "N373NW", "N3740C", "N3741S", "N3742C", "N3743H", "N3744F", "N3745B", "N3746H", "N3747D", "N3748Y", "N3749D", "N374CA", "N374DA", "N374NW", "N3750D", "N3751B", "N3752", "N3753", "N3754A", "N3755D", "N3756", "N3757D", "N3758Y", "N3759", "N375DA", "N375NC", "N3760C", "N3761R", "N3762Y", "N3763D", "N3764D", "N3765", "N3766", "N3767", "N3768", "N3769L", "N376CA", "N376DA", "N376NW", "N37700", "N3771K", "N3772H", "N3773D", "N377DA", "N377NW", "N378CA", "N378DA", "N378NW", "N379CA", "N379DA", "N380DA", "N381DN", "N382DA", "N383DN", "N384DA", "N385DN", "N386DA", "N387DA", "N388DA", "N389DA", "N390CA", "N390DA", "N391CA", "N391DA", "N392DA", "N393DA", "N394DA", "N394DL", "N395DN", "N396DA", "N397DA", "N398CA", "N398DA", "N399DA", "N522US", "N535US", "N536US", "N537US", "N538CA", "N538US", "N539US", "N540US", "N541US", "N542US", "N543US", "N544US", "N545US", "N546US", "N547US", "N548CA", "N548US", "N549CA", "N549US", "N550NW", "N551NW", "N552NW", "N553NW", "N554CA", "N554NW", "N555NW", "N556NW", "N557NW", "N581NW", "N582CA", "N582NW", "N583NW", "N584NW", "N585NW", "N586NW", "N587NW", "N588NW", "N589NW", "N590NW", "N591NW", "N592NW", "N593NW", "N594NW", "N595NW", "N596NW", "N600LR", "N600QX", "N601LR", "N602CZ", "N602LR", "N603AT", "N603CZ", "N603QX", "N603SK", "N604CZ", "N604LR", "N604QX", "N604SK", "N605CZ", "N605LR", "N605QX", "N606CZ", "N606LR", "N606SK", "N607AT", "N607CZ", "N607LR", "N607SK", "N608AT", "N608CZ", "N608QX", "N608SK", "N609CZ", "N609SK", "N610CZ", "N611QX", "N611SK", "N612CZ", "N612DL", "N612QX", "N613CZ", "N613QX", "N613SK", "N614CZ", "N614QX", "N614SK", "N615CZ", "N615QX", "N616CZ", "N616QX", "N617CZ", "N617DL", "N617QX", "N618DL", "N619CZ", "N620CZ", "N621CZ", "N622CZ", "N623CZ", "N623DL", "N624AG", "N624CZ", "N625CA", "N625CZ", "N626CZ", "N627CZ", "N627DL", "N628CZ", "N629CZ", "N630CZ", "N630SK", "N631CZ", "N631SK", "N632CZ", "N632SK", "N633CZ", "N633DL", "N633SK", "N634CZ", "N635CZ", "N635DL", "N636CZ", "N637CZ", "N638CZ", "N639CZ", "N641CA", "N642CA", "N650DL", "N651DL", "N652DL", "N653CA", "N654DL", "N655CA", "N656CA", "N658CA", "N659CA", "N659DL", "N660DL", "N661DN", "N662DN", "N662US", "N663DN", "N664DN", "N665US", "N666DN", "N666US", "N667DN", "N667US", "N668CA", "N668DN", "N668US", "N669CA", "N669DN", "N669US", "N6700", "N6701", "N6702", "N6703D", "N6704Z", "N6705Y", "N6706Q", "N6707A", "N6708D", "N6709", "N670DN", "N670US", "N6710E", "N6711M", "N6712B", "N6713Y", "N6714Q", "N6715C", "N6716C", "N67171", "N671DN", "N672DL", "N673DL", "N673US", "N674DL", "N674US", "N675DL", "N676CA", "N676DL", "N676NW", "N678CA", "N678DL", "N679CA", "N679DA", "N680DA", "N681DA", "N682DA", "N683DA", "N684DA", "N685DA", "N686DA", "N687DL", "N688DL", "N689CA", "N689DL", "N690CA", "N690DL", "N691CA", "N692CA", "N692DL", "N693CA", "N693DL", "N694DL", "N695CA", "N695DL", "N696DL", "N697DL", "N698DL", "N699DL", "N701DN", "N702DN", "N702TW", "N703DN", "N703TW", "N704DK", "N704X", "N705DN", "N705TW", "N706DN", "N706TW", "N707DN", "N707EV", "N707TW", "N708DN", "N708EV", "N709DN", "N709EV", "N709TW", "N710EV", "N710TW", "N711ZX", "N712EV", "N712TW", "N713EV", "N713TW", "N716EV", "N717EV", "N717JL", "N717TW", "N718EV", "N718TW", "N719EV", "N720EV", "N721TW", "N722EV", "N722TW", "N723EV", "N723TW", "N724EV", "N727TW", "N730EV", "N738EV", "N740EV", "N741EV", "N744EV", "N746CZ", "N747CZ", "N748CZ", "N748EV", "N749CZ", "N750EV", "N751AT", "N751CZ", "N751EV", "N752AT", "N752CZ", "N752EV", "N753EV", "N754EV", "N755EV", "N758EV", "N759EV", "N760EV", "N761ND", "N800SK", "N801DZ", "N801NW", "N802DN", "N802NW", "N802SK", "N803DN", "N803NW", "N803SK", "N804DN", "N804NW", "N804SK", "N805DN", "N805NW", "N805SK", "N806DN", "N806NW", "N806SK", "N807DN", "N807NW", "N807SK", "N808DN", "N808NW", "N809DN", "N809NW", "N809SK", "N810DN", "N810MD", "N810NW", "N810SK", "N811DZ", "N811NW", "N812DN", "N812NW", "N812SK", "N813DN", "N813NW", "N813SK", "N814DN", "N814NW", "N814SK", "N815DN", "N815MD", "N815NW", "N815SK", "N816DN", "N816NW", "N816SK", "N817DN", "N817NW", "N817SK", "N818DA", "N818MD", "N818NW", "N819DN", "N819DX", "N819NW", "N820DN", "N820DX", "N820NW", "N820SK", "N821DN", "N821DX", "N821NW", "N821SK", "N822DN", "N822DX", "N822NW", "N822SK", "N823DN", "N823DX", "N823MD", "N823NW", "N823SK", "N824DN", "N824MD", "N824NW", "N824SK", "N825DN", "N825MH", "N825NW", "N825SK", "N826DN", "N826MH", "N826NW", "N827DN", "N827MH", "N828DN", "N828MH", "N829DN", "N829MH", "N830DN", "N830MH", "N831DN", "N831MH", "N832DN", "N832MH", "N833DN", "N833MH", "N834DN", "N834MH", "N835DN", "N835MH", "N836DN", "N836MH", "N837DN", "N837MH", "N838DN", "N838MH", "N839DN", "N839MH", "N840DN", "N840MH", "N841DN", "N841MH", "N842DN", "N842MH", "N843DN", "N843MH", "N844DN", "N844MH", "N845DN", "N845MH", "N846DN", "N847DN", "N848DN", "N849DN", "N850DN", "N851DN", "N851NW", "N852DN", "N852NW", "N853DN", "N853NW", "N854DN", "N854NW", "N855DN", "N855NW", "N856DN", "N856NW", "N857NW", "N858NW", "N859NW", "N860DA", "N860NW", "N860RW", "N861DA", "N861NW", "N862DA", "N863DA", "N864DA", "N865DA", "N866DA", "N867DA", "N867RW", "N868RW", "N869RW", "N870RW", "N871RW", "N872RW", "N873RW", "N874RW", "N891AT", "N892AT", "N893AT", "N894AT", "N895AT", "N896AT", "N896SK", "N897SK", "N898SK", "N899AT", "N899SK", "N900DE", "N900PC", "N901DA", "N901DE", "N901XJ", "N902DA", "N902DE", "N902XJ", "N903DA", "N903DE", "N903XJ", "N904DA", "N904DE", "N904DL", "N904XJ", "N905DA", "N905DE", "N905DL", "N905XJ", "N906AT", "N906DA", "N906DE", "N906DL", "N906XJ", "N907DA", "N907DE", "N907DL", "N907XJ", "N908DA", "N908DE", "N908DL", "N908XJ", "N909DA", "N909DE", "N909DL", "N909XJ", "N910AT", "N910DE", "N910DL", "N910DN", "N910XJ", "N911DA", "N911DE", "N911DL", "N912DE", "N912DL", "N912DN", "N912XJ", "N913DE", "N913DL", "N913DN", "N913XJ", "N914DE", "N914DL", "N914DN", "N914XJ", "N915AT", "N915DE", "N915DL", "N915DN", "N915XJ", "N916DE", "N916DL", "N916DN", "N916XJ", "N917DE", "N917DL", "N917DN", "N917XJ", "N918DE", "N918DH", "N918DL", "N918XJ", "N919AT", "N919DE", "N919DL", "N919DN", "N919XJ", "N920AT", "N920DE", "N920DL", "N920DN", "N920XJ", "N921AT", "N921DL", "N921DN", "N921XJ", "N922AT", "N922DL", "N922DX", "N922XJ", "N923AT", "N923DL", "N923DN", "N923XJ", "N924AT", "N924DL", "N924DN", "N924XJ", "N925AT", "N925DL", "N925DN", "N925XJ", "N926AT", "N926DH", "N926DL", "N926XJ", "N927AT", "N927DA", "N927DN", "N927XJ", "N928AT", "N928DL", "N928DN", "N928XJ", "N929AT", "N929DL", "N929DN", "N929XJ", "N930AT", "N930DL", "N930DN", "N930XJ", "N931DL", "N931DN", "N931XJ", "N932AT", "N932DL", "N932DN", "N932XJ", "N933AT", "N933DL", "N933DN", "N933XJ", "N934AT", "N934DL", "N934DN", "N934XJ", "N935AT", "N935DL", "N935DN", "N935XJ", "N936AT", "N936DL", "N936DN", "N936XJ", "N937AT", "N937DL", "N937DN", "N937XJ", "N938AT", "N938DL", "N938DN", "N939AT", "N939DL", "N939DN", "N940AT", "N940DL", "N940DN", "N941DL", "N941DN", "N942AT", "N942DL", "N942DN", "N943AT", "N943DL", "N943DN", "N944AT", "N944DL", "N944DN", "N945AT", "N945DL", "N945DN", "N946AT", "N946DL", "N946DN", "N947AT", "N947DL", "N947DN", "N948AT", "N948DL", "N948DN", "N949AT", "N949DL", "N949DN", "N950AT", "N950DL", "N950DN", "N951AT", "N951DL", "N951DN", "N952AT", "N952DL", "N952DN", "N953AT", "N953DL", "N953DN", "N954AT", "N954DL", "N954DN", "N955AT", "N955DL", "N955DN", "N956AT", "N956DL", "N956DN", "N957AT", "N957DL", "N957DN", "N958AT", "N958DL", "N958DN", "N958WH", "N959AT", "N959DL", "N959DN", "N960AT", "N960DL", "N960DN", "N961AT", "N961DL", "N961DN", "N962DL", "N962DN", "N963AT", "N963DL", "N963DN", "N964AT", "N964DL", "N964DN", "N965AT", "N965DL", "N965DN", "N966AT", "N966DL", "N967AT", "N967DL", "N968AT", "N968DL", "N969AT", "N969DL", "N970AT", "N970DL", "N971AT", "N971DL", "N972AT", "N972DL", "N973DL", "N974AT", "N974DL", "N975AT", "N975DL", "N976DL", "N977AT", "N977DL", "N978AT", "N978DL", "N979AT", "N979DL", "N980AT", "N980DL", "N981AT", "N981DL", "N982AT", "N982DL", "N983AT", "N983DL", "N984DL", "N985AT", "N985DL", "N986AT", "N986DL", "N987AT", "N987DL", "N987DN", "N988AT", "N988DL", "N988DN", "N989AT", "N989DL", "N989DN", "N990AT", "N990DL", "N991AT", "N991DL", "N992AT", "N992DL", "N993AT", "N993DL", "N994AT", "N994DL", "N995AT", "N995DL", "N996AT", "N996DL", "N997AT", "N997DL", "N998AT", "N998DL", "N999DN"];

        return (
            <div>
                <br/>
                <br/>
                <br/>
                <form action="">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div style={{position: 'relative'}}>
                        {<ComboSelect text="-Select me-" type="select" data={standardArray}
                                      onChange={this.fakeFunction} icon="fa fa-chevron-circle-down" search="smart"
                                      disabled={true} value="N988DN"/>}
                        {/*<ComboSelect text="-Select me-" type="multiselect" data={standardArray}
                         onChange={this.fakeFunction} icon="fa fa-chevron-circle-down" search="smart"
                         map={{text: 'win', value: true}} required sort="number"/>*/}
                    </div>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}