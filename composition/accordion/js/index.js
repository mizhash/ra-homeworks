'use strict';
function App() {
    return (
        <Accordian title="React">
            <AccordianSection head="Компоненты">
                Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
            </AccordianSection>
            <AccordianSection head="Выучил раз, используй везде!">
                После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
            </AccordianSection>
            <AccordianSection head="Использование JSX">
                JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
            </AccordianSection>
        </Accordian>
    )
}

//-----Вариант1 - может быть открыта только одна секция

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.changeActiveSection = this.changeActiveSection.bind(this);
        this.sections = this.props.children.filter(item => item.type === AccordianSection);
        this.sections.forEach(section => section.props.onToggle = this.changeActiveSection);
        this.state = {
            activeSection: null
        }
    }

    changeActiveSection(head) {
        let section = this.sections.find(item => item.props.head === head);
        if (section.props.hidden) {
            section.props.hidden = false;
        } else {
            section = null;
        }
        this.setState({
            activeSection: section
        })
    }

    render() {
        this.sections.forEach(section => {
            section.props.hidden = !(section === this.state.activeSection);
            section.key = section.props.head + section.props.hidden;
        });
        return (
            <main className="main">
                <h2 className="title">{this.props.title}</h2>
                {this.sections}
            </main>
        )
    }
}

function AccordianSection(props) {
    return (
        <section className={`section ${props.hidden ? '' : 'open'}`}>
            <button>toggle</button>
            <h3 className="sectionhead" onClick={() => props.onToggle(props.head)}>{props.head}</h3>
            <div className="articlewrap">
                <div className="article">
                    {props.children}
                </div>
            </div>
        </section>
    )
}


//-----Вариант 2 - можно раскрыть все секции

//function Accordian(props) {
//    const sections = props.children.filter(item => item.type === AccordianSection);
//    return (
//        <main className="main">
//            <h2 className="title">{props.title}</h2>
//            {sections}
//        </main>
//    )
//}
//
//class AccordianSection extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            hidden: true
//        };
//        this.toggleSection = this.toggleSection.bind(this);
//    }
//
//    toggleSection() {
//        this.setState({
//            hidden: !this.state.hidden
//        });
//    };
//
//    render() {
//        return (
//            <section className={`section ${this.state.hidden ? '' : 'open'}`}>
//                <button>toggle</button>
//                <h3 className="sectionhead" onClick={this.toggleSection}>{this.props.head}</h3>
//                <div className="articlewrap">
//                    <div className="article">
//                        {this.props.children}
//                    </div>
//                </div>
//            </section>
//        )
//    }
//}