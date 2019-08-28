extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn text_parser(text: &str) -> String{
    let mut formatted_text = vec![];
    let mut input_speech_mode: bool = false;
    let mut input_braces: bool = false;

    for t in text.chars() {
        if t == '!' {
            input_speech_mode = true;
            input_braces = true;
        }
        else if input_speech_mode && input_braces && t == ' ' {
            formatted_text.push('「'.to_string());
            input_braces = false;
        }
        else if input_speech_mode && t == '\n' {
            formatted_text.push("」\n".to_string());
            input_speech_mode = false;
        }
        else {
            formatted_text.push(t.to_string());
        }
    }
    
    return formatted_text.iter().cloned().collect::<String>();
}
