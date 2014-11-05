/**
 * @author Christian Brel <christian@the6thscreen.fr, ch.brel@gmail.com>
 */

class InfoException implements Error {
    name:string;
    message:string;

    constructor(message: string) {
        this.message = message;
    }
}