'use strict';
/**
 * EnhancedMediaField
 *
 * @author Sandro Schaurer <sandro.schaurer@flagbit.de>
 */
define([
        'jquery',
        'underscore',
        'pimui/js/product/field/media-field',
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

                if (!window.mediaFieldStore) {
                    window.mediaFieldStore = {};
                }

                window.mediaFieldStore[this.cid] = this;
            },

            drop(targetField) {
                return event => {
                    event.preventDefault();
                    const eventData = JSON.parse(event.originalEvent.dataTransfer.getData("application/json"));
                    const sourceField = window.mediaFieldStore[eventData.fieldId];

                    const sourceImage = sourceField.getCurrentValue().data;
                    sourceField.setUploadContextValue(targetField.getCurrentValue().data);
                    targetField.setUploadContextValue(sourceImage);

                    targetField.render();
                    sourceField.render();
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
