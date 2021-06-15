import {Extensions} from "./mod.ts";

Deno.test("does not throw on valid extensions", () => {
  let extensions = new Extensions();

  let ext = { name: "deflate", type: "permessage", rsv1: true, rsv2: false, rsv3: false };

  extensions.add(ext)
})