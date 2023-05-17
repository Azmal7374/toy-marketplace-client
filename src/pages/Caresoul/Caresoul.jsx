var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/sports-equipment-wooden-background_51195-86.jpg?size=626&ext=jpg&ga=GA1.1.220873417.1673880723&semt=ais" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));