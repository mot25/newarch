export const thousand = (str: string) => {
    const a = parseInt(str).toString().split('.')[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    const b = parseInt(str).toString().split('.')[1]
    return !!b ? `${a}.${b}` : `${a}`
}


export const getProcent = (procent: number, sum: number) => ( sum / 100 ) * procent