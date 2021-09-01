<?php

namespace Flagbit\Bundle\ImageSortBundle\Provider\Field;

use Akeneo\Pim\Structure\Component\Model\AttributeInterface;
use Akeneo\Platform\Bundle\UIBundle\Provider\Field\FieldProviderInterface;

class EnhancedMediaFieldProvider implements FieldProviderInterface
{
    private const FIELD_ID = 'flagbit-media-field';

    /**
     * {@inheritdoc}
     */
    public function getField($element): string
    {
        return self::FIELD_ID;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($element): bool
    {
        return $element instanceof AttributeInterface && self::FIELD_ID === $element->getType();
    }
}