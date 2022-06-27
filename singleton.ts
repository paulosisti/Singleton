class Singleton {
  private static singleton: Singleton;
  private logger: string[] = [];
  private constructor() {}

  public static getSingleton (): Singleton {
    if (!Singleton.singleton) {
    Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }

  public pushLogger(data: string): void {
    this.logger.push(data);
  }

  public getLogger(): string[] {
    return this.logger;
  }
}

let singleOne = Singleton.getSingleton();
let singleTwo = Singleton.getSingleton();

if(singleTwo === singleOne) {
  console.log("Our singleton is working!");
}

singleOne.pushLogger("first entry...");
singleTwo.pushLogger("second entry...");

console.log("LOGGER INFO: ",singleOne.getLogger());