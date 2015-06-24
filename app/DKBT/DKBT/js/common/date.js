Date.prototype.toString = function (format) {
    if (!format || typeof format != 'string')
        format = "yyyy-MM-dd";

    format = format.replace(/yyyy/, this.getFullYear())
                           .replace(/yy/, this.getFullYear().toString().substring(2))
                           .replace(/y/, this.getFullYear().toString().substring(2).trimLeft("0"))
                           .replace(/MM/, (this.getMonth() + 1).toString().padLeft('0', 2))
                           .replace(/dd/, this.getDate().toString().padLeft('0', 2))
                           .replace(/M/, (this.getMonth() + 1))
                           .replace(/d/, this.getDate().toString())
                           .replace(/HH/, this.getHours().toString().padLeft('0', 2))
                           .replace(/mm/, this.getMinutes().toString().padLeft('0', 2))
                           .replace(/ss/, this.getSeconds().toString().padLeft('0', 2))
                           .replace(/H/, this.getHours())
                           .replace(/m/, this.getMinutes())
                           .replace(/s/, this.getSeconds());
    date = null;
    return format;
}