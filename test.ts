type Key = "key1" | "key2" | "key3";

enum KeyEnum {
  Key1 = "key1",
  Key2 = "key2",
  Key3 = "key3",
}

const keyArray = ["key1", "key2", "key3"];

const object1: { [key: string]: string } = {};

const object2: Record<Key, string> = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
