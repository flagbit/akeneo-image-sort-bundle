'use strict';
/**
 * EnhancedMediaField
 *
 * @author Sandro Schaurer <sandro.schaurer@flagbit.de>
 */
define([
        'jquery',
        'underscore',
        'flagbit/media-field',
        '../../../templates/product/field/media.html'
    ], function (
        $,
        _,
        MediaField,
        fieldTemplate
    ) {
        return MediaField.extend({
            fieldTemplate: _.template(fieldTemplate),

            postRender() {
                this.$('.AknMediaField')
                    .on('drop', this.drop(this))
                    .on('dragover', this.allowDrop.bind(this));

                this.$('.AknMediaField-thumb.file[draggable]')
                    .on('dragstart', this.drag(this));

                if (!window.mediaFieldStore)
                    window.mediaFieldStore = {};

                window.mediaFieldStore[this.cid] = this;
            },

            drop(self) {
                return event => {
                    event.preventDefault();
                    const eventData = JSON.parse(event.originalEvent.dataTransfer.getData("application/json"));
                    const other = window.mediaFieldStore[eventData.fieldId];

                    const otherImage = other.getCurrentValue().data;
                    other.setUploadContextValue(self.getCurrentValue().data);
                    self.setUploadContextValue(otherImage);

                    self.render();
                    other.render();
                };
            },

            allowDrop(event) {
                event.preventDefault();
            },

            drag(sourceField) {
                return event => {
                    event.originalEvent.dataTransfer.setData("application/json", JSON.stringify({
                        fieldId: sourceField.cid
                    }));
                }
            }
        });
    }
)