/**
 * BLOCK: BULB TF Question
 *
 * A True/False Question Block
 */

// Import block dependencies and components
import Inspector from './components/inspector';

//  Import CSS.
import './styles/style.scss';
import './styles/editor.scss';

// Components
const { __ } = wp.i18n;

// Extend component
const { Component } = wp.element;

// Register block
const { registerBlockType } = wp.blocks;

// Register the block
registerBlockType( 'bulb/question-tf',
	{
		title: __( 'BULB Question - T/F', 'bulearningblocks' ),
		description: __( 'Add a TRUE/FALSE question to your learning module.' ),
		icon: 'layout', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
		category: 'bu-learning-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
		keywords: [
			__( 'bu-learning-block', 'bulearningblocks' ),
			__( 'BULB', 'bulearningblocks' ),
			__( 'True False Question', 'bulearningblocks' ),
		],

		edit: props => {
            // const { className, isSelected } = props;
            return (
              <div>
                <h2>{ __( 'Static Call to Action' ) }</h2>
                <p>{ __( 'This is really important!' ) }</p>
              </div>
            );
          },

          save: props => {
            return (
              <div>
                <h2>{ __( 'Call to Action' ) }</h2>
                <p>{ __( 'This is really important!' ) }</p>
              </div>
            );
          },
    }
);