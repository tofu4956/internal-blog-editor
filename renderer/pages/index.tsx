import { TextField } from "@mui/material";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { parseInput } from "../utils/parseInput";

const IndexPage = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [parsedmarkdown, setParsedMarkdown] = useState<string>("");
  // wip
  const [parsedmdx, setParsedMdx] =
    useState<MDXRemoteSerializeResult<Record<string, unknown>>>();
  const [countwords, setCountWords] = useState<number>(0);
  useEffect(() => {
    async function mdHandler(markdown) {
      //md
      const parseResult = await parseInput(markdown);
      setParsedMarkdown(parseResult);
    }
    HandleWordCount(markdown);
    mdHandler(markdown);
  }, [markdown]);

  const HandleWordCount = (content) => {
    setCountWords([...content].length);
  };
  return (
    <Layout title="Simple Markdown Editor">
      <div>
        <h1>About </h1>
        <span>
          <p>
            <i>words: {countwords}</i>
          </p>
        </span>
      </div>
      <div className="main-panel-outer">
        <div className="main-panel-inner">
          <TextField
            multiline
            rows={15}
            fullWidth
            label="Markdown"
            sx={{
              marginLeft: "0.25%",
              width: '49.5%',
              marginRight: "0.25%",
            }}
            onChange={(e) => {
              setMarkdown(e.target.value);
            }}
            inputProps={{ tabIndex: -1 }}
          />
          <TextField
            multiline
            rows={15}
            fullWidth
            label="Compiled"
            sx={{
              marginLeft: "0.25%",
              width: '49.5%',
              marginRight: "0.25%",
            }}
            InputProps={{
              readOnly: true,
            }}
            value={parsedmarkdown}
            inputProps={{ tabIndex: -1 }}
          />
        </div>
      </div>
      <div>
        <h1>Preview</h1>
        <div dangerouslySetInnerHTML={{ __html: parsedmarkdown }} />
      </div>
    </Layout>
  );
};

export default IndexPage;
