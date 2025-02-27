export function motorSizeOf(motorType: any): number {
    if(motorType.size === undefined) {
        throw new Error("Motor type does not have a size property");
    }
    return motorType.size;
}