module.exports = function (frame, assert, browserWidth, helper) {
    describe('Tooltip 2', function () {
        var tooltip;
        var tooltipContent;

        beforeEach(function () {
            frame.reset();
            tooltip = frame.get('#tooltip-2 as24-tooltip').toDomElement();
        })

        it('Hover tooltip', function (done) {
            setTimeout(function () {
                helper.hoverOn(tooltip);
                setTimeout(function () {
                    tooltipContent = frame.get('#tooltip-2 .tooltip-shown').toDomElement();
                    assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
                    done();
                }, 100); //wait for text
            }, 100); //wait for reseting
        });

        it('Click tooltip', function (done) {
            return setTimeout(function () {
                helper.click(tooltip);
                setTimeout(function () {
                    tooltipContent = frame.get('#tooltip-2 .tooltip-shown').toDomElement();
                    assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
                    done();
                }, 100); //wait for text
            }, 100); //wait for reseting
        });
    });
};