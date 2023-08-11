import classes from './VeterinaryPage.module.css'
import pigs from '../../image/feed/pigs.jpg'
import ScrollButton from '../MyButton/ScrollButton'
import { CompanyName } from '../Footer/CompanyName'




export function VeterinaryPage(){

    
    return(
         <div className={classes.veterinary}>

            <div className={classes.vetImageBg}>
                <h1>Ветеринарія</h1>
                <img src={pigs} alt="pigs" />

            </div>
            
            <div className={classes.infoPanel}>
            <div className={classes.content}>

           
                <ScrollButton/>

                <div className={classes.infoContainer}>

                        <div className={classes.sectionLeft}>
                                <h1>Ветеринарія</h1>
                                <ul>
                                    <li><a href="#section">Колістину сульфат</a></li>
                                    <li><a href="#section1">Метронідазол</a></li>
                                    <li><a href="#section2">Альбендазол</a></li>
                                    <li><a href="#section3">Тіамулін</a></li>
                                    <li><a href="#section4">Оксітетрациклін</a></li>
                                    <li><a href="#section5">Фуразолідон</a></li>
                                    <li><a href="#section6">Амоксицилін</a></li>
                                    <li><a href="#section7">Енрофлоксацин</a></li>
                                    <li><a href="#section8">Бутафосфан</a></li>
                                    <li><a href="#section9">Доксициклін</a></li>
                                    <li><a href="#section10">Триметоприм</a></li>
                                    <li><a href="#section11">Ципрофлоксацин</a></li>
                                    <li><a href="#section12">Сульфатдімідін</a></li>
                                    <li><a href="#section13">Тилозину тартрат</a></li>


                                </ul>
                        </div>
                        <div className={classes.sectionRight}>
                                <section id='section' className={classes.itemsSection}>
                                        <h1>Колістину сульфат</h1>
                                       <p><strong>Колістін</strong> - антибіотик групи поліміксинів, який синтезуються аеробною спорообразуючою паличкою Bacillus polymyxа. Він бактерицидно діє на грамнегативні бактерії (E. coli, Haemophilus spp., Salmonella spp.). Колістін зв'язується з фосфоліпідами цитоплазматичної мембрани, підсилює її проникність для внутрішньоклітинних і зовнішньоклітинних компонентів, що веде до деструкції клітин бактерії. Препарат всмоктується з шлунково-кишкового тракту в маленьких дозах. Виводиться з організму переважно з фекаліями. Дія колістіну проти бактерій Pseudomonas посилюється в присутності сульфаніламідів.</p> 
                                </section>
                                <section id='section1' className={classes.itemsSection}>
                                        <h1>Метронідазол</h1>
                                       <p><strong>Метронідазол</strong> — це стабільна сполука, що здатна проникати у мікроорганізми. За анаеробних умов метронідазол утворює з мікробною піруват-фередоксин-оксидоредуктазою нітрозорадикали шляхом окиснення фередоксину і флаводоксину.</p> 
                                </section>
                                <section id='section2' className={classes.itemsSection}>
                                        <h1>Альбендазол</h1>
                                       <p><strong>Альбендазол</strong> — синтетичний протигельмінтний препарат, що є похідним бензімідазолу, для прийому всередину. </p> 
                                </section>
                                <section id='section3' className={classes.itemsSection}>
                                        <h1>Тіамулін</h1>
                                       <p><strong>Тіамулін</strong> — профілактика і лікування свиней при дизентерії, колибактериозе, пастереллезе, сальмонельозі, атрофічному риніті, ензоотичну пневмонії, плевропневмонії, артритів бактеріальної етіології та інших збудників інфекцій, які супроводжують вірусний трансмісивний гастроентерит. </p> 
                                </section>
                                <section id='section4' className={classes.itemsSection}>
                                        <h1>Оксітетрациклін</h1>
                                       <p><strong>Оксітетрациклін</strong> — синтетичний протигельмінтний препарат, що є похідним бензімідазолу, для прийому всередину. </p> 
                                </section>
                                <section id='section5' className={classes.itemsSection}>
                                        <h1>Фуразолідон</h1>
                                       <p><strong>Фуразолідон</strong> — антимікробний і антипротозойний засіб, похідне нітрофурану. Порушує процес клітинного дихання бактерій, пригнічує біосинтез нуклеїнових кислот. Залежно від концентрації проявляє бактеріостатичний або бактерицидний ефект. Активний щодо грамнегативних паличок (ешерихія, сальмонели, шигели, протей, клебсієла, цитробактер), грампозитивних коків (стрептококи, стафілококи), найпростіших (лямблії, трихомонади). Серед збудників кишкових інфекцій найбільш чутливими є збудники дизентерії, черевного тифу і паратифів. Слабко впливає на збудників гнійної та анаеробної інфекції. Опірність до фуразолідону розвивається повільно. Активує фагоцитоз, не пригнічує імунну систему. </p> 
                                </section>
                                <section id='section6' className={classes.itemsSection}>
                                        <h1>Амоксицилін</h1>
                                       <p><strong>Амоксицилін</strong> — β-лактамний антибіотик широкого спектра дії, що використовується для лікування інфекцій ряду сприятливих до нього бактерій. </p> 
                                </section>
                                <section id='section7' className={classes.itemsSection}>
                                        <h1>Енрофлоксацин</h1>
                                       <p><strong>Енрофлоксацин</strong> — є фторхінолоновим антибіотиком, який використовується для лікування тварин. Це бактерицидний засіб. Бактерицидна активність енрофлоксацину залежить від концентрації, причому загибель клітин чутливих бактерій відбувається протягом 20–30 хвилин після впливу. </p> 
                                </section>
                                <section id='section8' className={classes.itemsSection}>
                                        <h1>Бутафосфан</h1>
                                       <p><strong>Бутафосфан</strong> — Препарат призначають сільськогосподарським і домашнім тваринам, птиці, хутровим звірам при порушеннях обміну речовин різної етіології, а також в якості стимулюючого і тонізуючого засобу: з метою активізації пологової діяльності та профілактики післяпологових ускладнень (атонія матки, родильний парез); для підвищення опірності організму до захворювань різної етіології (бактеріальні, вірусні, гельмінтози, арахно-ентомози, інтоксикації) і несприятливих факторів зовнішнього середовища. Для нормалізації функцій печінки, білкового, вуглеводного і жирового обміну речовин і регенеративних процесів. Як додатковий засіб при лікуванні інфекційних і неінфекційних захворювань, при лікуванні захворювань, обумовлених недоліком в організмі кальцію і магнію. Для підвищення продуктивності тварин, стимуляції росту та розвитку молодняка. </p> 
                                </section>
                                <section id='section9' className={classes.itemsSection}>
                                        <h1>Доксициклін</h1>
                                       <p><strong>Доксициклін</strong> — напівсинтетичний антибіотик групи тетрациклінів широкого спектра дії. Зумовлює бактеріостатичну дію за рахунок пригнічення синтезу білка збудників у результаті блокування зв’язку аміноацил-транспортної РНК (тРНК) з комплексом «інформаційна РНК (іРНК) – рибосома». </p> 
                                </section>
                                <section id='section10' className={classes.itemsSection}>
                                        <h1>Триметоприм</h1>
                                       <p><strong>Триметоприм</strong> — синтетичний антибіотик, що є похідним діамінопірімідину, який застосовується перорально та парентерально.  </p> 
                                </section>
                                <section id='section11' className={classes.itemsSection}>
                                        <h1>Ципрофлоксацин</h1>
                                       <p><strong>Ципрофлоксацин</strong> — протимікробний препарат із класу хінолонів. Бактерицидна дія хінолонів, що головним чином впливає на синтез ДНК бактерій, виражається шляхом пригнічення ДНК-гірази. </p> 
                                </section>
                                <section id='section12' className={classes.itemsSection}>
                                        <h1>Сульфатдімідін</h1>
                                       <p><strong>Сульфатдімідін</strong> — интетичний препарат з групи сульфаніламідних препаратів короткої дії. Препарат має бактеріостатичну дію, що полягає у порушенні синтезу мікрооргазмами фолієвої кислоти та блокуванні засвоєння мікроорганізмами параамінобензойної кислоти. </p> 
                                </section>
                                <section id='section12' className={classes.itemsSection}>
                                        <h1>Тилозину тартрат</h1>
                                       <p><strong>Тилозину тартрат</strong> — синтетичний протигельмінтний препарат, що є похідним бензімідазолу, для прийому всередину. антибіотик ветеринарного призначення з групи макролідів, що продукується Streptomyces fradiae; активний відносно переважно грампозитивних і деяких грамнегативних мікроорганізмів, у тому числі стафілококів (Staphylococcus spp.), стрептококів (Streptococcus spp.), а також мікоплазм (Mycoplasma spp.)</p> 
                                </section>
                        </div>
                </div>
                
            </div>

            </div>
            <CompanyName />
        </div>
    )
}